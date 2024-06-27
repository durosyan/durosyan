# sourced from https://www.xda-developers.com/how-to-open-full-right-click-menu-by-default-windows-11/
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
# {86ca1aa0-34aa-4e8b-a509-50c905bae2a2}
# reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f