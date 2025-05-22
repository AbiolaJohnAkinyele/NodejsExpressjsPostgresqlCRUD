# 🧩 Users API – Express.js + PostgreSQL

This is a simple RESTful API built with **Node.js**, **Express.js**, and **PostgreSQL**. It allows full CRUD operations on a `users` table.

---

## 🚀 How to Run This Project

### ✅ Prerequisites

- [Node.js](https://nodejs.org)
- [PostgreSQL](https://www.postgresql.org/)
- PostgreSQL database with a `users` table:
  ```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
  );
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

 const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "dareyIO",
  password: "your-password"
});


| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/users`     | Get all users        |
| GET    | `/users/:id` | Get a user by ID     |
| POST   | `/users`     | Create a new user    |
| PUT    | `/users/:id` | Update a user's name |
| DELETE | `/users/:id` | Delete a user by ID  |

 POST /users
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

PUT /users/1
{
  "name": "Jane Doe"
}
