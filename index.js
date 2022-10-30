// const express = require("express")// CommonJS
import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js"

//Crear app
const servidor = express()

//Definir un puerto y arrancar el proyecto
const puerto = 3000;

servidor.listen(puerto, () =>{
    console.log(`El servidor esta funcionando en el puerto ${puerto}`)
})

//Routing
servidor.use("/", usuarioRoutes)

