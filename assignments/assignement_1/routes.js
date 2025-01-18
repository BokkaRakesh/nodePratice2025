const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Username</title></head>');
        res.write(`
          <body>
            <h1>Welcome!</h1>
            <form action="/create-user" method="POST">
              <input type="text" name="username" placeholder="Enter your username" required>
              <button type="submit">Submit</button>
            </form>
          </body>
        `);
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><h1>List of Users</h1><ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(`Username received: ${username}`);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    // Default response for unsupported routes
    res.statusCode = 404;
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>Page not found</h1></body>');
    res.write('</html>');
    res.end();
};

// Correct way to export the handler
module.exports = requestHandler;
