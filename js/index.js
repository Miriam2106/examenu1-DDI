let tele = {
    encendido: false,
    mute: false,
    volumen: 3,
    canal: 7
}

let volumenOriginal = 3

const prender = () =>{
    tele = {
        encendido: true,
        mute: false,
        volumen: 3,
        canal: 7
    }
}

const imprimir = () => {
    console.log(`Encendida: ${tele.encendido}, Mute: ${tele.mute}, Volumen: ${tele.volumen}, Canal: ${tele.canal}`)
}

const APAGADO = "btn btn-primary btn-lg disabled"
const ENCENDIDO = "btn btn-primary btn-lg"

const encender = () =>{
    tele.encendido = !tele.encendido
    if(tele.encendido){
        prender()
        document.getElementById("volumen").className = ENCENDIDO
        document.getElementById("bajarVolumen").className = ENCENDIDO
        document.getElementById("canal").className = ENCENDIDO
        document.getElementById("bajarCanal").className = ENCENDIDO
        document.getElementById("silenciar").className = ENCENDIDO
        console.log("Televisión encendida")
    }else{
        document.getElementById("volumen").className = APAGADO
        document.getElementById("bajarVolumen").className = APAGADO
        document.getElementById("canal").className = APAGADO
        document.getElementById("bajarCanal").className = APAGADO
        document.getElementById("silenciar").className = APAGADO
        console.log("Televisión apagada")
    }
    imprimir()
}

const subirVolumen = () =>{
    if(tele.volumen == 10){
        console.log("Volumen al máximo")
        imprimir()
        return
    }
    if(tele.volumen == 0){
        tele.volumen = volumenOriginal
        tele.mute = false
        imprimir()
        return
    }
    tele.volumen++
    imprimir()
}

const bajarVolumen = () =>{
    if(tele.volumen == 1){
        console.log("Volumen al mínimo")
        imprimir()
        return
    }
    if(tele.volumen == 0){
        tele.volumen = volumenOriginal
        tele.mute = false
        imprimir()
        return
    }
    tele.volumen--
    imprimir()
}

const subirCanal = () =>{
    if(tele.canal == 100){
        console.log("Canal máximo")
        imprimir()
        return
    }
    tele.canal++
    imprimir()
}

const bajarCanal = () =>{
    if(tele.canal == 1){
        console.log("Canal al mínimo")
        imprimir()
        return
    }
    tele.canal--
    imprimir()
}

const silenciar = () =>{
    tele.mute = !tele.mute
    if(tele.mute){
        volumenOriginal = tele.volumen
        tele.volumen = 0
        console.log("Televisión silenciada")
    }else{
        tele.volumen = volumenOriginal
        console.log("Televisión no silenciada xd")
    }
    imprimir()
}