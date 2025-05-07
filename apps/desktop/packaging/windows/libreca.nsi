; Libreca Windows Installer (NSIS)
; Compile with: makensis libreca.nsi

!define APPNAME        "Libreca"
!define COMPANY        "Pedro Brito"
!define DESCRIPTION    "Libreca – couch‑friendly personal hub"
!define VERSION        "0.1.0"
!define INSTALLDIR     "$PROGRAMFILES64\\Libreca"
!define EXE_NAME       "Libreca.exe"

; --- Initial setup -----------------------------------------------------------
SetCompressor /SOLID lzma
RequestExecutionLevel admin
LoadLanguageFile "${NSISDIR}\\Contrib\\Language files\\English.nlf"

Name "${APPNAME} ${VERSION}"
OutFile "Libreca-${VERSION}-setup.exe"
InstallDir "${INSTALLDIR}"
Icon "libreca.ico"
UninstallIcon "libreca.ico"
ShowInstDetails show
ShowUninstDetails show
LicenseData "license.txt"

; --- Pages -------------------------------------------------------------------
Page license
Page directory
Page instfiles
UninstPage uninstConfirm
UninstPage instfiles

; --- Sections ----------------------------------------------------------------
Section "Install"
  SetOutPath $INSTDIR
  ; Copy the Tauri‑built bundle
  File "..\\..\\src-tauri\\target\\release\\bundle\\msi\\Libreca_${VERSION}_x64_en-US.msi"
  ; Execute MSI silently
  ExecWait '"$INSTDIR\\Libreca_${VERSION}_x64_en-US.msi" /quiet'
  ; Create shortcuts
  CreateShortCut "$DESKTOP\\Libreca.lnk" "$INSTDIR\\${EXE_NAME}"
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\\Libreca.lnk"
  ; Remove MSI product via GUID (replace with real GUID from Wix log)
  ExecWait 'msiexec /x {PUT-YOUR-GUID-HERE} /quiet'
  RMDir /r $INSTDIR
SectionEnd