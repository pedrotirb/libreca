---

## 3 · `03-component-web.md`  (C4 Level 3 for `apps/web`)

```md
# Web App – Component Diagram

```mermaid
C4Component
title Web App (Next.js) – Components
Container(web, "Next.js Frontend") {
  Component(PageHome, "Home Page", "Tailwind/JSX", "Hex grid & controller nav")
  Component(AuthHook, "useAuth Hook", "React Hook", "Auth state w/ Supabase")
  Component(ModuleAPI, "Module Service", "TS", "Abstraction over /modules/*")
}
Rel(PageHome, AuthHook, "uses")
Rel(PageHome, ModuleAPI, "fetches data")
Rel(AuthHook, pg, "reads JWT", "supabase-js")