import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/lib/schemas";
import { readRange } from "@/lib/googleSheets";

// Users sheet columns (shared with Platform 1):
// A user_id | B name | C email | D username | E password_hash | F role | G status
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { username, password } = parsed.data;
  const rows = await readRange("Users!A2:G");

  const row = rows.find((r) => {
    const email = (r?.[2] ?? "").toString().toLowerCase();
    const uname = (r?.[3] ?? "").toString().toLowerCase();
    const input = username.toLowerCase();
    return email === input || uname === input;
  });

  if (!row) {
    console.log("Login failed: User not found in sheet for input:", username);
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const role = (row?.[5] ?? "").toString().toLowerCase().trim();
  const status = (row?.[6] ?? "active").toString().toLowerCase().trim();

  console.log(`Login attempt for ${username}: Found role='${role}', status='${status}'`);

  if (role !== "client") {
    console.log(`Login failed: Role mismatch. Expected 'client', got '${role}'`);
    return NextResponse.json({ error: "Not a client account" }, { status: 403 });
  }

  if (status !== "active") {
    console.log(`Login failed: Status mismatch. Expected 'active', got '${status}'`);
    return NextResponse.json({ error: "Account inactive" }, { status: 403 });
  }

  const hash = (row?.[4] ?? "").toString();
  const ok = await bcrypt.compare(password, hash).catch(() => false);
  if (!ok) {
    console.log("Login failed: Password mismatch for user:", username); 
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, client_id: (row?.[0] ?? "").toString(), name: (row?.[1] ?? "").toString() });
  res.cookies.set("js_client_session", "ok", { httpOnly: true, sameSite: "lax", path: "/" });
  return res;
}
