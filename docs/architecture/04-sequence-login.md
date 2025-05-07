---

## 4 · `04-sequence-login.md`  (Sequence diagram)

```md
# Sequence – Email Link Login

```mermaid
sequenceDiagram
  participant U as User
  participant W as Next.js
  participant S as Supabase Auth
  participant DB as Postgres

  U->>W: Enter email & press Login
  W->>S: supabase.auth.signInWithOtp(email)
  S-->>U: Magic link email
  U->>W: Click link (redirect)
  W->>S: Verify token
  S->>DB: Check user row
  DB-->>S: user record
  S-->>W: Session JWT
  W-->>U: Redirect to /dashboard