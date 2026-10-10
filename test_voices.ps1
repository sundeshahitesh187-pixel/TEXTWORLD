# Script to test voices endpoint
$apiKey = "sk_9caf321508bcd15148b0771cc9a54f12614fb26775f7a295"

try {
    $wr = [System.Net.WebRequest]::Create("https://api.elevenlabs.io/v1/voices")
    $wr.Method = "GET"
    $wr.Headers.Add("xi-api-key", $apiKey)
    $response = $wr.GetResponse()
    $rdr = New-Object System.IO.StreamReader($response.GetResponseStream())
    $json = $rdr.ReadToEnd()
    $rdr.Close()
    $response.Close()

    $data = ConvertFrom-Json $json
    Write-Output "Total voices: $($data.voices.Count)"
} catch {
    if ($_.Exception.Response) {
        $rStream = $_.Exception.Response.GetResponseStream()
        $rdr = New-Object System.IO.StreamReader($rStream)
        $msg = $rdr.ReadToEnd()
        $rdr.Close()
        Write-Output "HTTP $($_.Exception.Response.StatusCode): $msg"
    } else {
        Write-Output "Error: $($_.Exception.Message)"
    }
}
