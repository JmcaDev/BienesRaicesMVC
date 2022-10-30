import express from "express"

const router = express.Router()

//Routing
router.get("/", (req, res) =>{
    res.send("Hola mundo en express")
})

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