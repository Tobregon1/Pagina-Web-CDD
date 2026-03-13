const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
const baseDir = __dirname;

http.createServer((req, res) => {
    let filePath = path.join(baseDir, req.url === '/' ? 'index.html' : req.url);
    
    // Security: prevent directory traversal
    if (!filePath.startsWith(baseDir)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('Internal Server Error');
            }
            return;
        }

        // Guess MIME type
        const ext = path.extname(filePath).toLowerCase();
        let contentType = 'text/plain';
        if (ext === '.html') contentType = 'text/html';
        else if (ext === '.css') contentType = 'text/css';
        else if (ext === '.js') contentType = 'application/javascript';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.svg') contentType = 'image/svg+xml';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
