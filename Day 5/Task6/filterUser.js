const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 25 }
];

const filterUsersByAge = (users, minAge) => {
    return users.filter(user => user.age > minAge);
};

const filteredUsers = filterUsersByAge(users, 25);
console.log("Users older than 25:", filteredUsers);
