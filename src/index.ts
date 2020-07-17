import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

// import express from "express";

// const app = express();

// app.set("view engine", "pug");

// app.get("/", (req, res) => {
//   res.render("index");
// })

// app.get("/register", (req, res) => {
//   res.render("register");
// })

// app.get("/login", (req, res) => {
//   res.render("login");
// })

// app.get("/dashboard", (req, res) => {
//   res.render("dashboard");
// })

// app.listen(3000);
