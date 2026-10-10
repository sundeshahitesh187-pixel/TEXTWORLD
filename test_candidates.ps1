# Script to verify ElevenLabs voice compatibility with an API key
$apiKey = "sk_9caf321508bcd15148b0771cc9a54f12614fb26775f7a295"

$candidates = @(
    @{ id = "JBFqnCBsd6RMkjVDRZzb"; name = "George" },
    @{ id = "CwhRBWXzGAHq8TQ4Fs17"; name = "Roger" },
    @{ id = "nPczCjzI2devNBz1zQrb"; name = "Brian" },
    @{ id = "onwK4e9ZLuTAKqWW03F9"; name = "Daniel" },
    @{ id = "pFZP5JQG7iQjIQuC4Bku"; name = "Lily" },
    @{ id = "pqHfZKP75CvOlQylNhV4"; name = "Bill" },
    @{ id = "Xb7hH8MSUJpSbSDYk0k2"; name = "Alice" },
    @{ id = "cgSgspJ2msm6clMCkdW9"; name = "Jessica" },
    @{ id = "cjVigY5qzO86Huf0OWal"; name = "Eric" },
    @{ id = "iP95p4xoKVk53GoZ742B"; name = "Chris" },
    @{ id = "FGY2WhTYpPnrIDTdsKH5"; name = "Laura" },
    @{ id = "IKne3meq5aSn9XLyUdCD"; name = "Charlie" },
    @{ id = "N2lVS1w4EtoT3dr4eOWO"; name = "Callum" },
    @{ id = "SAz9YHcvj6GT2YYXdXww"; name = "River" },
    @{ id = "TX3LPaxmHKxFdv7VOQHJ"; name = "Liam" },
    @{ id = "XB0fDUnXU5powFXDhCwa"; name = "Charlotte" }
)

foreach ($c in $candidates) {
    try {
        $wr = [System.Net.WebRequest]::Create("https://api.elevenlabs.io/v1/text-to-speech/$($c.id)")
        $wr.Method = "POST"
        $wr.Headers.Add("xi-api-key", $apiKey)
        $wr.ContentType = "application/json"
        $body = '{"text":"Test","model_id":"eleven_turbo_v2_5"}'
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($body)
        $wr.ContentLength = $bytes.Length
        $stream = $wr.GetRequestStream()
        $stream.Write($bytes, 0, $bytes.Length)
        $stream.Close()

        $wr.GetResponse().Dispose()
        Write-Output "Supported: $($c.name)"
    } catch {
        Write-Output "Not supported: $($c.name)"
    }
}
