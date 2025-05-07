---

## 2 · `02-container.md`  (C4 Level 2)

```md
# C4 – Container Diagram

```mermaid
C4Container
title Libreca – Containers
Boundary(lib, "Libreca") {
  Container(web, "Next.js Frontend", "React/TS", "Hex grid UI, SSR, API routes")
  Container(tauri, "Tauri Shell", "Rust + WebView", "Loads built React UI")
  Container(server, "Fastify Service", "Node", "Webhook & utility API")
  ContainerDb(pg, "PostgreSQL", "Supabase", "User profiles, config")
  Container(storage, "Supabase Storage", "S3‑compatible", "Images, ROMs")
}
Rel(web, pg, "SQL over Supabase client")
Rel(web, storage, "Download/upload assets")
Rel(tauri, web, "Loads static bundle")
Rel(server, pg, "Admin queries")
Rel_Ext(web, "GitHub API", "OAuth login (optional)")