# Just Search – Platform 2 (Client Frontend CRM)

This is a **production-ready starter** for **Platform 2: Client Frontend CRM** based on your requirements:

- **Next.js (App Router) + React**
- **Tailwind CSS**
- **shadcn/ui-style components (included locally)**
- **Next.js Route Handlers** (`app/api/**/route.ts`)
- **Google Sheets as Database**
- **Lead Generation Machine** (Industry multi-select, Area multi-select, Pull leads, Compose message, Send WhatsApp/Email)
- **Message Results** (Successful/Failed + Remaining balance; only SUCCESS counts)
- **Automation integration** via **n8n** (Webhook trigger stub included)

---

## 1) Quick Start

### Install
```bash
npm install
```

### Configure Environment
Create `.env.local` from `.env.example`:
- `GOOGLE_SHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_JSON` (stringified JSON)
- `AUTH_JWT_SECRET`
- `N8N_WEBHOOK_URL`

### Run
```bash
npm run dev
```
Open: http://localhost:3001 (recommend different port via `PORT` when deploying)

---

## 2) Included Screens (UI)

- Client Login (logo + username + password)
- Client Dashboard (Total Msg Sent, Total Reply Received, Pipeline, Lead Generation summary)
- Lead Generation Machine:
  - Multi-select Industry
  - Multi-select Area
  - Pull leads from `Leads` sheet
  - Compose message details
  - Send via WhatsApp / Email
- Message Result Summary:
  - SUCCESS count
  - FAILED count
  - Remaining message balance

---

## 3) API Routes (Route Handlers)

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET  /api/client/summary`
- `GET  /api/leads/filters` (industries + areas)
- `POST /api/leads/pull`
- `POST /api/campaigns/create`
- `POST /api/messages/send` (triggers n8n)
- `GET  /api/messages/results?campaign_id=...`

All routes are implemented to work with Google Sheets.

---

## 4) Google Sheets (Database Tables)

Sheets expected:
1. `Users` (client users created from Platform 1)
2. `Leads`
3. `Campaigns`
4. `Message_Logs`
5. `Replies`
6. `Client_Balance`
7. `Audit_Log`

Schema template: `docs/google-sheets-schema.md`

---

## 5) Key Business Rule

**Only SUCCESS messages are counted as usage (billing).**
FAILED messages do **not** reduce balance.

---
