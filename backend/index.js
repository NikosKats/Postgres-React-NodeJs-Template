const express = require("express");
const db = require('./db'); // Import the database connection
const app = express();

app.use(express.json()); // Middleware to parse JSON

const PORT = 8000;

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
