import express from "express";

const app = express();
var bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
app.use(bodyParser.json());

require("./api/routes")(app);

app.listen(3001, () => {
    console.log("Beep boop! 🔥 Server is running 🔥");
});