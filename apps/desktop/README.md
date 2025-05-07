# Libreca Desktop (Tauri)

This wrapper ships the web build (`apps/web`) as a native app for
**Windows, macOS, and Linux** using the Tauri toolkit.

## Dev mode

```bash
# In repo root (one terminal)
pnpm --filter apps/web dev        # builds Next.js in watch mode

# In another terminal
cd apps/desktop
pnpm tauri dev                    # launches native window

src-tauri contains the Rust backend for Libreca Desktop.

Key tasks:
- `pnpm tauri dev`    : launches window pointing at Next.js dev server
- `pnpm tauri build`  : builds release installers (.dmg, .msi, .AppImage, .deb)

Icons live in /icons; update tauri.conf.json if you change names.
Plugins: tauri-plugin-window-state stores window size/pos in app data.

Build settings rely on Next.js output path "../../web/.next".