// The gateway verifies the caller's JWT. Database credentials stay in Supabase.
Deno.serve(async (request) => {
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
  if (request.method !== "GET" && request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...headers, Allow: "GET, POST" },
    });
  }

  try {
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) throw new Error("Missing database configuration");

    const functionName = request.method === "POST"
      ? "portfolio_record_page_visit"
      : "portfolio_get_page_visits";
    const response = await fetch(`${url}/rest/v1/rpc/${functionName}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: "{}",
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) throw new Error("Database request failed");
    const count = await response.json();
    if (typeof count !== "string" || !/^\d+$/.test(count)) {
      throw new Error("Invalid counter response");
    }
    return new Response(JSON.stringify({ pageVisits: count }), { headers });
  } catch {
    return new Response(JSON.stringify({ error: "Page visits unavailable" }), {
      status: 503,
      headers,
    });
  }
});
