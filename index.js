const express = require('express');
const {Client} = require('pg');

const app = express();

app.use(express.json());

const con = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    database: "dareyIO",
    password: "footfol777"
});

con.connect().then(()=> console.log("connected"));

app.get("/users", (req, res)=>{
    const getData = "SELECT * FROM users";
    con.query(getData, (err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result.rows);
        }
    });
});

app.get("/users/:id", (req, res)=>{
    const id = req.params.id;
    const getAllData = "SELECT * FROM users WHERE id=$1";
    con.query(getAllData, [id], (err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result.rows);
        }
    });
});

app.post("/users", (req, res)=>{
    const {id, name, email, age} = req.body;
    const postData = "INSERT INTO users (id, name, email, age) VALUES($1, $2, $3, $4)";
    con.query(postData, [id, name, email, age], (err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.send("Data created successfully");
        }
    });
});

app.put("/users/:id", (req, res)=>{
    const id = req.params.id;
    const updateData = "UPDATE users SET name=$1 WHERE id=$2";
    con.query(updateData, [id], (err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.send("Data updated successfully");
        }
    });
});

app.delete("/users/:id", (req, res)=>{
    const id = req.params.id;
    const deleteData = "DELETE FROM users WHERE id=$1";
    con.query(deleteData, [id], (err, res)=>{
        if(err){
            res.send(err);
        }else{
            res.send("Deleted successfully");
        }
    })
})

app.listen(3000, ()=> console.log("Server is running!!.."));