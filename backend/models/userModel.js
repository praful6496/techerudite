const db = require("../config/db");

const createUser = (firstName, lastName, email, hashedPassword, role, callback) => {
    const sql = "INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [firstName, lastName, email, hashedPassword, role], callback);
};

const findUserByEmail = (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
};

module.exports = { createUser, findUserByEmail };
