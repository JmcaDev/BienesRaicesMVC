// const express = require("express")// CommonJS
import express from "express";

//Crear app
const servidor = express()

//Definir un puerto y arrancar el proyecto
const puerto = 3000;

servidor.listen(puerto, () =>{
    console.log(`El servidor esta funcionando en el puerto ${puerto}`)
})

//Routing
servidor.get("/", function(req, res){
    res.send("Hola mundo en express")
})

servidor.get("/json", function(req, res){
    res.json({msg: "Hola mundo desde express y json"})
})

