Param(
  [string]$ExePath = "Libreca-0.1.0-setup.exe"
)

$certThumb = $env:CERT_THUMBPRINT   # Add to GitHub Secrets
$timestamp = "http://timestamp.digicert.com"

& "C:\Program Files (x86)\Windows Kits\10\App Certification Kit\signtool.exe" `
  sign /f my /sha1 $certThumb /tr $timestamp /td sha256 `
  /fd sha256 $ExePath