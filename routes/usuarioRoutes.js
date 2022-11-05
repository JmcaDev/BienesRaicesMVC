import express from "express"
import { formularioLogin, formularioRegistro, formularioOlvidePassword, registrar} from "../controllers/usuarioController.js"

const router = express.Router()

//Routing
router.get("/login", formularioLogin)

router.get("/registro", formularioRegistro)
router.post("/registro", registrar)

router.get("/olvide-password", formularioOlvidePassword)


// router.post("/", (req, res) =>{
//     res.json({msg: "respuesta de tipo post"})
// })

// router.route("/")
//     .get(function(req,res){
//         res.json({msg: "Hola Mundo con route"})
//     })
//     .post(function(req, res){
//         res.json({msg: "respuesta de tipo post"})
//     })

export default router