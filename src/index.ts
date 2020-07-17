import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, '../src/views'));
app.set("view engine", "pug");

mongoose.connect("mongodb://localhost/ss-auth");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
})

app.post("/register", (req, res) => {
    res.json(req.body);
})

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
