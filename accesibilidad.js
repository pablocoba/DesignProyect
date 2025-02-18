let accesibilidad = document.getElementById("accesibilidadBtn")
let fontSize = document.getElementById("fontSize")
let accWdw = document.getElementById("accesibilidadWdw")
let animation = document.getElementById("animationOnOff")

accesibilidad.addEventListener("click", event=>{
    if(accWdw.style.display == "block"){
        accWdw.style.display = "none"
        console.log(accWdw.style.display)
    }
    else{
        accWdw.style.display = "block"
        console.log(accWdw.style.display)
    }
})
//hace que las casillas estén desmarcadas por defecto
document.addEventListener("DOMContentLoaded",event=>{
    fontSize.checked = false;
    animation.checked = false;
})

let animationOnOff = document.getElementById('animationOnOff');

animationOnOff.addEventListener('change', event => {
  let elementosAnimados = document.getElementsByClassName('borde-animado')
  for(e of elementosAnimados){
    if(e.style.animation != "none"){
        e.style.animation = "none"
    }
    else{
        e.style.animation = "border-color-change 5s ease infinite"
    }
  }
  
});

fontSize.addEventListener("change", event=>{
    const elementos = document.querySelectorAll("*")
    if(event.target.checked){
        elementos.forEach(elemento=>{
            let tamano1 = window.getComputedStyle(elemento).fontSize
            let tamano = tamano1.slice(0, (tamano1.length-2))
            let nuevoTamanoRem = parseFloat(tamano)+(parseFloat(tamano)*5/100);
            let tamanoRem = Math.floor((parseFloat(nuevoTamanoRem)/16)*100)/100;
            elemento.style.fontSize = `${tamanoRem}rem`
        })
    }
    else{
        elementos.forEach(elemento=>{
            let tamano1 = window.getComputedStyle(elemento).fontSize
            let tamano = tamano1.slice(0, (tamano1.length-2))
            let nuevoTamanoRem = parseFloat(tamano)-(parseFloat(tamano)*5/100);
            let tamanoRem = Math.floor((parseFloat(nuevoTamanoRem)/16)*100)/100;
            elemento.style.fontSize = `${tamanoRem}rem`
        })
    }   
})