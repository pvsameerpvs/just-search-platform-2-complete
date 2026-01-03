import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/lib/schemas";
import { getUsers } from "@/lib/googleSheets";

// Users sheet columns (shared with Platform 1):
// A user_id | B name | C email | D username | E password_hash | F role | G status
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  try {
    const { username, password } = parsed.data;
    console.info("Login attempt for", username);
    
    // Fetch all users using the typed helper
    const users = await getUsers();
    console.info("Fetched users count:", users.length);

    const user = users.find((u) => {
      const email = u.email.toLowerCase();
      const uname = u.username.toLowerCase();
      const input = username.toLowerCase();
      return email === input || uname === input;
    });

    if (!user) {
      console.log("Login failed: User not found in sheet for input:", username);
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const { role, status, password_hash, user_id, name } = user;

    console.log(`Login attempt for ${username}: Found role='${role}', status='${status}'`);

    if (role.toLowerCase() !== "client") {
      console.log(`Login failed: Role mismatch. Expected 'client', got '${role}'`);
      return NextResponse.json({ error: "Not a client account" }, { status: 403 });
    }

    if (status.toLowerCase() !== "active") {
      console.log(`Login failed: Status mismatch. Expected 'active', got '${status}'`);
      return NextResponse.json({ error: "Account inactive" }, { status: 403 });
    }

    const ok = await bcrypt.compare(password, password_hash).catch(() => false);
    if (!ok) {
      console.log("Login failed: Password mismatch for user:", username); 
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Log the successful login
    /*
      Disabled temporarily as it might slow down the login response or if crypto is missing.
      But user requested integration, so we add the import and call.
    */
    // Dynamic import to avoid circular dependency issues if any, or just standard import at top.
    const { logSystemAction } = await import("@/lib/googleSheets");
    
    await logSystemAction({
        log_id: `log-${Date.now()}`,
        action: "LOGIN_SUCCESS",
        companyName: name, 
        email: user.email,
        timestamp: new Date().toISOString()
    }).catch(err => console.error("Failed to write audit log:", err));

    const res = NextResponse.json({ ok: true, client_id: user_id, name: name });
    res.cookies.set("js_client_session", "ok", { httpOnly: true, sameSite: "lax", path: "/" });
    return res;
  } catch (error: any) {
    console.error("Login API Error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
