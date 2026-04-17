-- ============================================================
-- NSPIRE Academy — Supabase Database Setup
-- Run this entire file in your Supabase SQL Editor
-- ============================================================

-- 1. Create the progress table
create table if not exists public.progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null unique,
  sections_read jsonb default '{}'::jsonb,
  chapters_complete jsonb default '{}'::jsonb,
  quiz_scores jsonb default '{}'::jsonb,
  test_scores jsonb default '{}'::jsonb,
  streak integer default 0,
  last_studied text,
  updated_at timestamptz default now()
);

-- 2. Enable Row Level Security
alter table public.progress enable row level security;

-- 3. RLS Policy — users can only see and edit their own progress
create policy "Users can view own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.progress for update
  using (auth.uid() = user_id);

-- 4. Auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_progress_updated
  before update on public.progress
  for each row execute procedure public.handle_updated_at();

-- ============================================================
-- DONE. After running this:
-- 1. Go to Authentication > Settings in Supabase
-- 2. Set your Site URL to your Vercel domain
-- 3. Add your Vercel domain to Redirect URLs
-- ============================================================
