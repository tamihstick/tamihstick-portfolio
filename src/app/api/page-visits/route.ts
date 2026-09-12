import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function pageVisits(method: "GET" | "POST") {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json({ error: "Page visits unavailable" }, { status: 503 });
  }

  try {
    const response = await fetch(`${url}/functions/v1/portfolio-page-visits`, {
      method,
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error("Page visits unavailable");
    const data = (await response.json()) as { pageVisits?: unknown };
    if (typeof data.pageVisits !== "string" || !/^\d+$/.test(data.pageVisits)) {
      throw new Error("Invalid page visits response");
    }

    return NextResponse.json({ pageVisits: data.pageVisits }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Page visits unavailable" }, {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }
}

// Reading the counter must never record a visit.
export async function GET() {
  return pageVisits("GET");
}

export async function POST() {
  return pageVisits("POST");
}
