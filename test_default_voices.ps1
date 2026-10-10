# Script to test default ElevenLabs voices
$apiKey = "sk_9caf321508bcd15148b0771cc9a54f12614fb26775f7a295"

$testVoices = @(
    @{ id = "JBFqnCBsd6RMkjVDRZzb"; name = "George" },
    @{ id = "CwhRBWXzGAHq8TQ4Fs17"; name = "Roger" }
)

foreach ($v in $testVoices) {
    try {
        $wr = [System.Net.WebRequest]::Create("https://api.elevenlabs.io/v1/text-to-speech/$($v.id)")
        $wr.Method = "POST"
        $wr.Headers.Add("xi-api-key", $apiKey)
        $wr.ContentType = "application/json"
        $body = '{"text":"Hello","model_id":"eleven_turbo_v2_5"}'
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($body)
        $wr.ContentLength = $bytes.Length
        $stream = $wr.GetRequestStream()
        $stream.Write($bytes, 0, $bytes.Length)
        $stream.Close()

        $resp = $wr.GetResponse()
        Write-Output "SUCCESS: $($v.name) ($($v.id)) generated! HTTP $($resp.StatusCode)"
        $resp.Close()
    } catch {
        $rStream = $_.Exception.Response.GetResponseStream()
        $rdr = New-Object System.IO.StreamReader($rStream)
        $msg = $rdr.ReadToEnd()
        $rdr.Close()
        Write-Output "FAILED: $($v.name) ($($v.id)) -> $msg"
    }
}
