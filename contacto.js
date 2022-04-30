const form = document.getElementById("form")
const nombre = document.getElementById("Nombre")
const correo = document.getElementById("correo")
const tel = document.getElementById("tel")
const ciudad = document.getElementById("ciudad")
const coment = document.getElementById("coment")
const texto = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    texto.innerHTML = ""
    if(nombre.value.length <6){
        warnings += "El nombre no tiene un formato valido <br>"
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
        warnings += "El correo no tiene un formato valido <br>"
        entrar = true
    }
    if((tel.value.length <12 >9)){
        warnings += "El numero telefonico no tiene un formato valido <br>"
        entrar = true
    }
    if((ciudad.value.length <5)){
        warnings += "La ciudad no tiene un formato valido <br>"
        entrar = true
    }
    if((coment.value.length <50 >30)){
        warnings += "Ingrese un comentario de minimo 30 caracteres <br>"
        entrar = true
    }
    if(entrar){
        texto.innerHTML = warnings
    }else{
        texto.innerHTML = "Enviado"
    }
})
