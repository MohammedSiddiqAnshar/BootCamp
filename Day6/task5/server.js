const express = require("express");
const fs = require("fs");

const app = express();
const USERS_FILE = "users.json";
app.use(express.json());

const getUsers = () => JSON.parse(fs.readFileSync(USERS_FILE, "utf8") || "[]");


const saveUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));


app.get("/users", (req, res) => res.json(getUsers()));


app.post("/users", (req, res) => {
    let users = getUsers();
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    saveUsers(users);
    res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
    let users = getUsers();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "User not found" });
    users[index] = { ...users[index], ...req.body };
    saveUsers(users);
    res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
    let users = getUsers().filter(u => u.id != req.params.id);
    saveUsers(users);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
