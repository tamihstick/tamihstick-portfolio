# Portfolio page visits

The home page records one visit on its first appearance per browser page load,
including a full refresh. Navigating to another route and back to Index reuses
that visit instead of incrementing again. Visits are page loads, not unique people.
The shared total lives in the Supabase `portfolio` project
(`portfolio`, Singapore region).

`POST /api/page-visits` records one visit; `GET /api/page-visits` only reads the
total. Both call the `portfolio-page-visits` Edge Function with JWT verification
enabled. The function uses its built-in server credentials to access the counter.
The database increments the total in one atomic update, so concurrent requests
cannot overwrite each other. Neither startup nor deployment resets the total.

The browser caches the last successful total only for display during outages.
This cache does not determine the shared total. Until a total is available, the
page displays an em dash. Previous in-memory counts cannot be recovered.

## Deployment

The database schema and Edge Function are already provisioned. Local development
uses `.env.local`, which is excluded from Git. Set these same environment variables
in the website hosting project's environment before deploying the website:

- `SUPABASE_URL`: `https://portfolio`
- `SUPABASE_ANON_KEY`: the project's legacy anon JWT from Supabase API settings

See `.env.example` for the configuration format. The legacy anon key is used for
the Edge Function gateway's JWT verification. Service-role credentials remain
inside Supabase and must not be placed in browser code.

The schema is recorded in `page-visits.sql` and in the remote migration named
`portfolio_page_visits`. Reapplying the SQL preserves the saved total. The Edge
Function source is in `supabase/functions/portfolio-page-visits/index.js`; keep
JWT verification enabled when redeploying it.

RLS is enabled with no client policies deliberately: only `service_role` can
read or update the table or execute its functions. Supabase's advisor reports an
[informational notice for RLS without policies](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy);
anonymous and signed-in clients have no direct table or RPC access.

## Verified behavior

Browser checks covered one increment per page load in React Strict Mode, refresh
persistence, a shared total in a fresh browser context, eight concurrent visits,
read-only GET requests, and retaining the cached total during a simulated outage.
Synthetic test visits were removed afterward.

A navigation regression check also covered all four primary routes returning to
Index, browser Back, and a full refresh. That check intercepted the visit API so
it did not change the live total.
