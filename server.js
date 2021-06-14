const express = require("express");
const path = require("path");
const application = express();

const PORT = process.env.PORT || 8080;

application.use(express.static(__dirname + "/dist/SISTEMAFINANCEIROWEB"));

application.get("/*", (request, response) => {
	response.sendFile(__dirname + "/dist/SISTEMAFINANCEIROWEB");
});

application.listen(PORT, () => {
    console.log("Sistema Financeiro Excutando [" + PORT + "]");
});