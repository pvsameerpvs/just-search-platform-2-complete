import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(4),
});

export const PullLeadsSchema = z.object({
  industries: z.array(z.string()).min(1),
  areas: z.array(z.string()).min(1),
  limit: z.number().int().min(1).max(500).default(100),
});

export const SendMessageSchema = z.object({
  client_id: z.string().min(1),
  campaign_id: z.string().min(1),
  channel: z.enum(["whatsapp", "email", "both"]),
  message: z.string().min(5),
  lead_ids: z.array(z.string()).min(1),
});
