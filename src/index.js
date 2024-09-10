const express = require("express")
const motos = require("./router/motos.js");
const refrigerantes = require("./router/refrigerantes.js");
const aeroportos = require("./router/aeroportos.js");
const canetas = require("./router/canetas.js")
const porta = 3000;
const app = express();

app.use(express.json());
app.use("/aeroporto", aeroportos);
app.use("/moto", motos)
app.use("/refrigerante", refrigerantes)
app.use("/caneta", canetas);




app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})