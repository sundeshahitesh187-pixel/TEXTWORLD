# Script to test TTS generation with ElevenLabs API key
$apiKey = "sk_9caf321508bcd15148b0771cc9a54f12614fb26775f7a295"
$voiceId = "JBFqnCBsd6RMkjVDRZzb" # George (premade voice supported on free tier)

$body = @{
    text = "Hello from ElevenLabs studio!"
    model_id = "eleven_turbo_v2_5"
} | ConvertTo-Json

try {
    $wr = [System.Net.WebRequest]::Create("https://api.elevenlabs.io/v1/text-to-speech/$voiceId")
    $wr.Method = "POST"
    $wr.Headers.Add("xi-api-key", $apiKey)
    $wr.ContentType = "application/json"
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($body)
    $wr.ContentLength = $bytes.Length
    $stream = $wr.GetRequestStream()
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Close()

    $resp = $wr.GetResponse()
    Write-Output "SUCCESS: HTTP $($resp.StatusCode)"
    $resp.Close()
} catch {
    if ($_.Exception.Response) {
        $rStream = $_.Exception.Response.GetResponseStream()
        $rdr = New-Object System.IO.StreamReader($rStream)
        $msg = $rdr.ReadToEnd()
        $rdr.Close()
        Write-Output "ERROR: $msg"
    } else {
        Write-Output "ERROR: $($_.Exception.Message)"
    }
}
