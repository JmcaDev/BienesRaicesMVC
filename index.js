// const express = require("express")// CommonJS
import express from "express";
import db from "./config/db.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"

//Crear app
const servidor = express()

//Habilitar lectura de datos
servidor.use( express.urlencoded({extended: true}) )

//Conexion base de datos
try{
    await db.authenticate()
    db.sync()
    console.log("Conexion correcta a la base de datos")
}catch(error){
    console.log(error)
}

//Habilitar pug
servidor.set("view engine", "pug")
servidor.set("views", "./views")

//Carpeta Publica
servidor.use(express.static("public"))

//Definir un puerto y arrancar el proyecto
const puerto = 3000;

servidor.listen(puerto, () =>{
    console.log(`El servidor esta funcionando en el puerto ${puerto}`)
})

//Routing
servidor.use("/auth", usuarioRoutes)

