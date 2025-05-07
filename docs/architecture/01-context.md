# C4 – System Context

```mermaid
C4Context
title Libreca – System Context
Enterprise_Boundary(c0, "Libreca") {
  Person(user, "End‑User", "Uses Libreca on TV/desktop")
  System_Boundary(s1, "Libreca Suite") {
    System(web, "Web App", "Next.js + Tailwind")
    System(desktop, "Desktop App", "Tauri wrapper")
    System(backend, "Server API", "Fastify / Node")
  }
}
System_Ext(supabase, "Supabase", "DB, Auth, Storage")
System_Ext(vercel, "Vercel", "Hosting & Edge Functions")
Rel(user, web, "Browses / controls via controller")
Rel(user, desktop, "Runs as native app")
Rel(web, supabase, "SQL & Auth", "HTTPS")
Rel(desktop, supabase, "SQL & Auth", "HTTPS")
Rel(backend, supabase, "Admin API", "PostgREST")
Rel(web, vercel, "Deployed static + SSR pages")