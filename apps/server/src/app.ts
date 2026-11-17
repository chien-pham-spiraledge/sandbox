import { Hono } from "hono";
import { serialize } from "@sandbox/shared";

export const app = new Hono();
app.get("/health", (c) => c.json({ ok: true }));
app.get("/serialize", (c) => c.json({ data: serialize({ ok: true }) }));
