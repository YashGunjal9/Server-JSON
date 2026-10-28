const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'application/json');
    if (req.url === "/" && req.method === "GET") {
        // Send a JSON response
        res.end(JSON.stringify({ message: "Welcome to the API!" }));
    } else if (req.url === "/users" && req.url === "GET") {
        // Send a JSON response with user data
        const users = [{ id: 1, name: "Yash Gunjal" }, { id: 2, name: "Nakul Meher" }];
        res.statusCode = 200;
        res.end(JSON.stringify({ users }));
    } else if (req.url === "/products" && req.method === "GET") {
        // Handle POST request for users
        res.statusCode = 201;
        const products = [{
            id: 101, name: "Laptop", price: "₹1,00,000", id: 102, name: "Phone", price: "₹50,000"
        }];
        res.end(JSON.stringify({ products }));
    }

});

// Default port to listen on
const PORT = 5000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});
