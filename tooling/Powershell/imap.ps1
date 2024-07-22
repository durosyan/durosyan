# Import the ImapX2.dll
[Reflection.Assembly]::LoadFile("YourDirectory\\imapx.dll")

# Create a client object
$client = New-Object ImapX.ImapClient

# Set the fetching mode to retrieve the part of message you want to retrieve, the less the better
$client.Behavior.MessageFetchMode = "Full"

# Set the host and port for Gmail's IMAP server
$client.Host = "outlook.office365.com"
$client.Port = 993
$client.UseSsl = $true

# Connect to the server
$client.Connect()

# Log in to the account
$user = "User"
$password = "Password"
$client.Login($user, $password)

# Search for all messages in the inbox
$messages = $client.Folders.Inbox.Search("ALL", $client.Behavior.MessageFetchMode, 1000)

# Loop through each message and retrieve its subject and attachments
foreach ($m in $messages) {
    $m.Subject
    foreach ($r in $m.Attachments) {
        $r | Out-File "Directory"
    }
}