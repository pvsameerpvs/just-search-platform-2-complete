import { google } from "googleapis";
import path from "path";
import fs from "fs";

// --- Configuration ---

export const SHEET_TAB_NAMES = {
  USERS: "Users",
  CLIENTS: "Clients",
  INVOICES: "Invoices",
  AUDIT_LOG: "Audit_Log",
  INDUSTRY_PRICING: "IndustryPricing",
  AREA_PRICING: "AreaPricing",
};

// --- Types ---

export interface UserRow {
  user_id: string; // A
  name: string; // B
  email: string; // C
  username: string; // D
  password_hash: string; // E
  role: string; // F
  status: string; // G
}

export interface ClientRow {
  client_id: string; // A
  companyName: string; // B
  industry: string; // C
  contactNumber: string; // D
  whatsapp: string; // E
  email: string; // F
  location: string; // G
  createdAt: string; // H
  industries: string; // I (comma sep?)
  areas: string; // J (comma sep?)
  leadQty: string; // K
  channels: string; // L
  discountPercent: string; // M
}

export interface InvoiceRow {
  invoice_id: string; // A
  client_id: string; // B
  amount: string; // C
  status: string; // D
  createdAt: string; // E
}

export interface AuditLogRow {
  log_id: string; // A
  action: string; // B
  companyName: string; // C
  email: string; // D
  timestamp: string; // E
}

export interface PricingRow {
  name: string; // A
  price: string; // B (Price or Multiplier)
}

// --- Auth & Generic Helpers ---

function getAuth() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON");
  let credentials: any;
  try { credentials = JSON.parse(raw); } 
  catch { throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON must be valid JSON string"); }

  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export function sheetsClient() {
  const auth = getAuth();
  return google.sheets({ version: "v4", auth });
}

export const SHEET_ID = () => {
  const id = process.env.GOOGLE_SHEET_ID;
  if (!id) throw new Error("Missing GOOGLE_SHEET_ID");
  return id;
};

export async function readRange(range: string) {
  const sheets = sheetsClient();
  console.info("attempt to read range", range);
  const res = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID(), range });
  console.info("read range", range);
  return res.data.values ?? [];
}

export async function appendRow(range: string, values: any[]) {
  const sheets = sheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID(),
    range,
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}

export async function updateRow(range: string, values: any[]) {
  const sheets = sheetsClient();
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID(),
    range,
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}

// --- Specific Data Access ---

// 1. Users
export async function getUsers(): Promise<UserRow[]> {
  const rows = await readRange(`${SHEET_TAB_NAMES.USERS}!A2:G`);
  return rows.map((r) => ({
    user_id: r[0] ?? "",
    name: r[1] ?? "",
    email: r[2] ?? "",
    username: r[3] ?? "",
    password_hash: r[4] ?? "",
    role: r[5] ?? "",
    status: r[6] ?? "",
  }));
}

// 2. Clients
export async function createClient(client: ClientRow) {
  const row = [
    client.client_id,
    client.companyName,
    client.industry,
    client.contactNumber,
    client.whatsapp,
    client.email,
    client.location,
    client.createdAt,
    client.industries,
    client.areas,
    client.leadQty,
    client.channels,
    client.discountPercent,
  ];
  await appendRow(`${SHEET_TAB_NAMES.CLIENTS}!A2:M`, row);
}

export async function getClients(): Promise<ClientRow[]> {
  const rows = await readRange(`${SHEET_TAB_NAMES.CLIENTS}!A2:M`);
  return rows.map((r) => ({
    client_id: r[0] ?? "",
    companyName: r[1] ?? "",
    industry: r[2] ?? "",
    contactNumber: r[3] ?? "",
    whatsapp: r[4] ?? "",
    email: r[5] ?? "",
    location: r[6] ?? "",
    createdAt: r[7] ?? "",
    industries: r[8] ?? "",
    areas: r[9] ?? "",
    leadQty: r[10] ?? "",
    channels: r[11] ?? "",
    discountPercent: r[12] ?? "",
  }));
}

// 3. Invoices
export async function createInvoice(invoice: InvoiceRow) {
    const row = [
        invoice.invoice_id,
        invoice.client_id,
        invoice.amount,
        invoice.status,
        invoice.createdAt
    ];
    await appendRow(`${SHEET_TAB_NAMES.INVOICES}!A2:E`, row);
}

// 4. Audit Log
export async function logSystemAction(log: AuditLogRow) {
    const row = [
        log.log_id,
        log.action,
        log.companyName,
        log.email,
        log.timestamp
    ];
    await appendRow(`${SHEET_TAB_NAMES.AUDIT_LOG}!A2:E`, row);
}

// 5. Pricing
export async function getIndustryPricing(): Promise<PricingRow[]> {
  const rows = await readRange(`${SHEET_TAB_NAMES.INDUSTRY_PRICING}!A2:B`);
  return rows.map((r) => ({
    name: r[0] ?? "",
    price: r[1] ?? "0",
  }));
}

export async function getAreaPricing(): Promise<PricingRow[]> {
  const rows = await readRange(`${SHEET_TAB_NAMES.AREA_PRICING}!A2:B`);
  return rows.map((r) => ({
    name: r[0] ?? "",
    price: r[1] ?? "1.0",
  }));
}
