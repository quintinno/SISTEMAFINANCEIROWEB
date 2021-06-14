const express = require("express");
const path = require("path");
const application = express();

application.use(express.static("./dist/SISTEMAFINANCEIROWEB"));

application.get("/*", (req, response) =>
    response.sendFile("index.html", {root: "dist/SISTEMAFINANCEIROWEB/"}),
);

application.listen(process.env.PORT || 8080);