import Usuario from "../models/Usuario.js"

const formularioLogin = (req, res)=> {
    res.render("auth/login", {
        pagina: "Iniciar Sesion"
    })
}

const formularioRegistro = (req, res)=> {
    res.render("auth/registro", {
        pagina: "Crear cuenta"
    })
}

const registrar = async (req, res) =>{
    const usuario = await Usuario.create(req.body)
    res.json(usuario)
}

const formularioOlvidePassword = (req ,res)=>{
    res.render("auth/olvide-password",{
        pagina: "Recupera tu cuenta"
    })
}



export{
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword,
    registrar
}