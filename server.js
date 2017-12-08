let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let PORT = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/public", express.static("public"));


app.


app.listen(PORT, function() {
    console.log("its working!!")
});