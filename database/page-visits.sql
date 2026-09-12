-- Shared portfolio counter. Applying this again preserves the existing total.
create table if not exists public.portfolio_page_visits (
  id boolean primary key default true check (id),
  total bigint not null default 0 check (total >= 0)
);

alter table public.portfolio_page_visits enable row level security;
revoke all on public.portfolio_page_visits from public, anon, authenticated;
grant select, update on public.portfolio_page_visits to service_role;

insert into public.portfolio_page_visits (id, total)
values (true, 0) on conflict (id) do nothing;

create or replace function public.portfolio_record_page_visit()
returns text
language sql
volatile
security invoker
set search_path = ''
as $$
  update public.portfolio_page_visits
  set total = total + 1
  where id = true
  returning total::text;
$$;

create or replace function public.portfolio_get_page_visits()
returns text
language sql
stable
security invoker
set search_path = ''
as $$
  select total::text from public.portfolio_page_visits where id = true;
$$;

revoke all on function public.portfolio_record_page_visit() from public, anon, authenticated;
revoke all on function public.portfolio_get_page_visits() from public, anon, authenticated;
grant execute on function public.portfolio_record_page_visit() to service_role;
grant execute on function public.portfolio_get_page_visits() to service_role;
