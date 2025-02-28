const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Hardcoded array of users
let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

// POST endpoint to add a new user
app.post("/users", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: "Name and age are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age
    };

    users.push(newUser);
    res.status(201).json({ message: "User added successfully", user: newUser });
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
});