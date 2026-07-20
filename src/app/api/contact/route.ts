import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return NextResponse.json(
      { error: "Contact backend not configured" },
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
        Name: { title: [{ text: { content: name } }] },
        "E-Mail": { email },
        Nachricht: { rich_text: [{ text: { content: message } }] },
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
