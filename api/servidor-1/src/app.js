import express from "express";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import * as path from "path";

const PORT = process.env.port || 3001;

const app = express();

app.use(bodyParser.json());

//Set handlebars
app.engine("handlebars", engine());
app.set("views engine", ".handlebars");
app.set("views", path.resolve(__dirname + "/views"));

//Array
const users = [
  {
    id: 1,
    nombre: "Felipe",
    email: "felipe@email.com",
  },
  {
    id: 2,
    nombre: "Isabella",
    email: "isabella@email.com",
  },
  {
    id: 3,
    nombre: "Juan",
    email: "juan@email.com",
  },
  {
    id: 4,
    nombre: "Didier",
    email: "dicasva@email.com",
  },
];

//Routas
app.get("/", (req, res) => {
  res.render("index.handlebars", {
    title: "Server 2",
    welcome: "Welcome to the ApiUsers Server 2",
    users: users,
  });
});

//get users
app.get("/users", (req, res) => {
  res.render("index.handlebars", {
    title: "Server 2",
    welcome: "Welcome to the ApiUsers Server 2",
    users: users,
  });
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//books by id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userById = users.find((userById) => userById.id === id);
  if (!userById) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.render("edit.handlebars", {
    title: "Server 2",
    welcome: "Welcome to the ApiUsers Server 2",
    users: userById,
  });
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userById = users.find((userById) => userById.id === id);
  if (!userById) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.json(userById);
});

//add user
app.get("/add", (req, res) => {
  res.render("add.handlebars", {
    title: "Server 2",
    welcome: "Welcome to the ApiUsers Server 2",
  });
});

app.post("/add", (req, res) => {
  const userObj = {
    id: users.length + 1,
    nombre: Nombre,
    email: Email,
  };

  users.push(userObj);
  res.redirect("/users");
});

//Delete user
app.get("/delete/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.send.status(404).send("User not found");

  const index = users.indexOf(user);
  users.splice(index, 1);
  res.redirect("/users");
});

app.put("/update/:id", (req, res) => {
  const index = users.findIndex(
    (index) => index.id === parseInt(req.params.id)
  );
  if (index !== -1) {
    users[index].nombre = req.body.nombre;
    users[index].email = req.body.email;
    res.send("User update");
  } else res.status(500).send("Fail to update");
});

app.listen(PORT, () => {
  console.log("Server running on the port " + PORT);
});
function newFunction() {
  return require("express");
}
