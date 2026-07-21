import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_SOURCES = ["Startseite", "Footer"] as const;

export async function POST(request: Request) {
  const { email, source } = await request.json();

  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const safeSource = VALID_SOURCES.includes(source) ? source : "Startseite";

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_WAITLIST_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return NextResponse.json(
      { error: "Waitlist backend not configured" },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        "E-Mail": { title: [{ text: { content: email } }] },
        Quelle: { select: { name: safeSource } },
        Status: { status: { name: "Nicht begonnen" } },
      },
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Notion API error:", detail);
    return NextResponse.json({ error: "Failed to save" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
