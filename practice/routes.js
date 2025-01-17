const fs = require('fs');
const requestHandler = (req, res) => {
const url = req.url; 
const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
    
            if (message) {
                // Decode the message (replace '+' with spaces if needed)
                const decodedMessage = decodeURIComponent(message.replace(/\+/g, ' '));
                fs.writeFile('message.txt', decodedMessage, err=>{
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                }); // Save message to file
            } else {
                console.error('Message not found in request body');
            }
    
        });
    }
};

module.exports = {
    handler:requestHandler,
    sometext:'Some hard coded text'
};