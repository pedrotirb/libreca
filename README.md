# Libreca 🐝

> **All‑in‑one couch‑friendly hub** — gaming, streaming, smart‑home, books, music, backups, AI.

| Module  | Emoji | Purpose                       |
| ------- | ----- | ----------------------------- |
| Ludix   | 🎮     | Retro & Steam gaming          |
| Spectra | 🎬     | Stremio / Jellyfin video      |
| Domaro  | 🏠     | Homebridge + automations      |
| Ritmo   | 🎵     | Music player & radio          |
| Folio   | 📚     | Books & audiobooks            |
| Praxis  | 💬     | On‑device voice assistant     |
| Arkea   | 🗄️     | Back‑up & NAS                 |
| Agora   | 🛍️     | Themes & plug‑ins marketplace |

## Tech Stack
- **Next.js 14** + **Tailwind CSS** (frontend)
- **Supabase** (PostgreSQL, Auth, Storage)
- **Turborepo** + **PNPM** (monorepo)
- **Tauri** (desktop shell w/ Rust)

## Getting Started

```bash
git clone https://github.com/pedrotirb/libreca
cd libreca
pnpm install
cp .env.example .env.local   # add your Supabase keys
pnpm dev                     # starts web and turbo cache