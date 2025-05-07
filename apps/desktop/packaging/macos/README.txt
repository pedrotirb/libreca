Packaging assets for Libreca macOS build.

Files:
- entitlements*.plist    : Hardened Runtime permissions
- Info.plist.template    : extra bundle keys merged by Tauri
- libreca-dmg.json       : Layout for branded DMG via create-dmg
- sign-notarize.sh       : Script to codesign, notarize, staple, and build DMG

Secrets required (set in GitHub repo):
  APPLE_ID           Apple Developer account email
  APP_SPECIFIC_PW    App‑specific password
  APPLE_TEAM_ID      10‑char Team ID
  APPLE_CERT_ID      "Developer ID Application: ..."
  KEYCHAIN_PASS      temp keychain password