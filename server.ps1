$logFile = "d:/Users/Windows/Downloads/Pagina-Web-CDD-main/Pagina-Web-CDD-main/server_log.txt"
"Starting server..." | Out-File $logFile
$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    "Servidor iniciado en http://localhost:$port/" | Out-File $logFile -Append
    Write-Host "Presiona Ctrl+C para detener."
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") { $localPath = "/index.html" }
        
        $filePath = Join-Path $pwd.Path $localPath.TrimStart('/')
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            
            # Simple MIME type guessing
            if ($filePath -match "\.html$") { $response.ContentType = "text/html" }
            elseif ($filePath -match "\.css$") { $response.ContentType = "text/css" }
            elseif ($filePath -match "\.js$") { $response.ContentType = "application/javascript" }
            elseif ($filePath -match "\.png$") { $response.ContentType = "image/png" }
            elseif ($filePath -match "\.jpg$") { $response.ContentType = "image/jpeg" }
            
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $message = "404 Not Found"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($message)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    }
} catch {
    "ERROR: $($_.Exception.Message)" | Out-File $logFile -Append
} finally {
    $listener.Stop()
}
