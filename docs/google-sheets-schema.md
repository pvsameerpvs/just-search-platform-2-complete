# Google Sheets Schema (Platform 2)

Create these sheets inside the same Google Spreadsheet used by Platform 1 (recommended).

---

## 1) Users (shared)
A `user_id`
B `name`
C `email`
D `username`
E `password_hash`
F `role` (client)
G `status` (active/inactive)

---

## 2) Leads
A `lead_id`
B `name`
C `industry`
D `area`
E `whatsapp`
F `email`

---

## 3) Campaigns
A `campaign_id`
B `client_id`
C `industries`
D `areas`
E `total_leads`
F `createdAt`

---

## 4) Message_Logs
A `log_id`
B `campaign_id`
C `lead_id`
D `channel` (whatsapp/email/both)
E `status` (SUCCESS/FAILED)
F `reason`
G `createdAt`

---

## 5) Replies (optional)
A `reply_id`
B `campaign_id`
C `lead_id`
D `reply_text`

---

## 6) Client_Balance
A `client_id`
B `client_name`
C `remaining_messages`

---

## 7) Audit_Log
A `event_id`
B `event_type`
C `reference`
D `details`
E `createdAt`
