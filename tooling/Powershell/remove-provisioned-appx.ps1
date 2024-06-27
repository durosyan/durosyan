Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.Zune*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Clipchamp.Clipchamp*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.Xbox*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.GetHelp*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.BingNews*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.BingWeather*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.GamingApp*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.Getstarted*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.MicrosoftSolitaireCollection*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.MicrosoftStickyNotes*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.MixedReality.Portal*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.Office.OneNote*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.PowerAutomateDesktop*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.People*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.StorePurchaseApp*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.Todos*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "microsoft.windowscommunicationsapps*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.WindowsFeedbackHub*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.WindowsMaps*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.YourPhone*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "MicrosoftCorporationII.MicrosoftFamily*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "MicrosoftCorporationII.QuickAssist*"} | Remove-AppxProvisionedPackage -online
Get-AppxProvisionedPackage -online | where-object {$_.packagename -like "Microsoft.WindowsSoundRecorder*"} | Remove-AppxProvisionedPackage -online

<#
idk
Microsoft.549981C3F5F10_4.2204.13303.0_neutral_~_8wekyb3d8bbwe
Microsoft.DesktopAppInstaller_2023.606.2047.0_neutral_~_8wekyb3d8bbwe
MicrosoftWindows.Client.WebExperience_423.13900.0.0_neutral_~_cw5n1h2txyewy

keep
NVIDIACorp.NVIDIAControlPanel_8.1.964.0_x64__56jybvy8sckqj
MicrosoftTeams_23119.303.2080.2726_x64__8wekyb3d8bbwe
Microsoft.HEIFImageExtension_1.0.61171.0_neutral_~_8wekyb3d8bbwe
Microsoft.HEVCVideoExtension_2.0.61591.0_neutral_~_8wekyb3d8bbwe
Microsoft.LanguageExperiencePacken-GB_22621.26.143.0_neutral__8wekyb3d8bbwe
Microsoft.MicrosoftEdge.Stable_114.0.1823.86_neutral__8wekyb3d8bbwe
Microsoft.MicrosoftOfficeHub_18.2305.1222.0_neutral_~_8wekyb3d8bbwe
Microsoft.Paint_11.2302.19.0_neutral_~_8wekyb3d8bbwe
Microsoft.RawImageExtension_2.1.61661.0_neutral_~_8wekyb3d8bbwe
Microsoft.ScreenSketch_2022.2303.17.0_neutral_~_8wekyb3d8bbwe
Microsoft.SecHealthUI_1000.25873.9001.0_x64__8wekyb3d8bbwe
Microsoft.VCLibs.140.00_14.0.27323.0_x64__8wekyb3d8bbwe
Microsoft.VP9VideoExtensions_1.0.61591.0_neutral_~_8wekyb3d8bbwe
Microsoft.WebMediaExtensions_1.0.61591.0_neutral_~_8wekyb3d8bbwe
Microsoft.WebpImageExtension_1.0.52351.0_x64__8wekyb3d8bbwe
Microsoft.Windows.Photos_2023.11050.16005.0_neutral_~_8wekyb3d8bbwe
Microsoft.WindowsAlarms_2022.2304.0.0_neutral_~_8wekyb3d8bbwe
Microsoft.WindowsCalculator_2021.2210.0.0_neutral_~_8wekyb3d8bbwe
Microsoft.WindowsCamera_2022.2305.4.0_neutral_~_8wekyb3d8bbwe
Microsoft.WindowsNotepad_11.2304.26.0_neutral_~_8wekyb3d8bbwe
Microsoft.WindowsStore_22306.1401.1.0_neutral_~_8wekyb3d8bbwe
Microsoft.WindowsTerminal_3001.17.11461.0_neutral_~_8wekyb3d8bbwe

#>