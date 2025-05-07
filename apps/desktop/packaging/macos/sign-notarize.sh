#!/usr/bin/env bash
# Sign & notarize Libreca.app then create a DMG
set -euo pipefail

APP="Libreca.app"
APP_PATH="src-tauri/target/release/bundle/macos/$APP"
TEAM_ID="$APPLE_TEAM_ID"          # set in GitHub secrets
CERT_ID="$APPLE_CERT_ID"          # e.g. "Developer ID Application: Pedro Brito (ABC123XYZ)"
KEYCHAIN_PASSWORD="$KEYCHAIN_PASS"

# 1. Code sign
codesign --deep --force --options runtime \
  --entitlements packaging/macos/entitlements.plist \
  --sign "$CERT_ID" "$APP_PATH"

# 2. Notarize
xcrun notarytool submit "$APP_PATH" \
  --apple-id "$APPLE_ID" \
  --password "$APP_SPECIFIC_PW" \
  --team-id "$TEAM_ID" --wait

# 3. Staple ticket
xcrun stapler staple "$APP_PATH"

# 4. Create DMG
create-dmg --overwrite --config packaging/macos/libreca-dmg.json "$APP_PATH" \
  src-tauri/target/release/bundle/macos/Libreca.dmg