# Compress everything to a file to upload somewhere for backup purposes
$compress = @{
    Path = "C:\Reference\Draftdoc.docx", "C:\Reference\Images\*.vsd"
    CompressionLevel = "Fastest"
    DestinationPath = "C:\Archives\Draft.zip"
}
Compress-Archive @compress

# Expand an archived backup
# Expand-Archive -LiteralPath <PathToZipFile> -DestinationPath <PathToDestination>