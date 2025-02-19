let accesibilidad2 = document.getElementById("accesibilidadBtn2")
let fontSize2 = document.getElementById("fontSize2")
let accWdw2 = document.getElementById("accesibilidadWdw2")
let animation2 = document.getElementById("animationOnOff2")

accesibilidad2.addEventListener("click", event=>{
    if(accWdw2.style.display == "block"){
        accWdw2.style.display = "none"
        console.log(accWdw2.style.display)
    }
    else{
        accWdw2.style.display = "block"
        console.log(accWdw2.style.display)
    }
})
accesibilidad2.addEventListener("keydown", event=>{
    if(event.key === ' '){
        if(accWdw2.style.display == "block"){
            accWdw2.style.display = "none"
            console.log(accWdw2.style.display)
        }
        else{
            accWdw2.style.display = "block"
            console.log(accWdw2.style.display)
        }
    }
})
//hace que las casillas estén desmarcadas por defecto
document.addEventListener("DOMContentLoaded",event=>{
    fontSize2.checked = false;
    animation2.checked = false;
})

let animationOnOff2 = document.getElementById('animationOnOff2');

animationOnOff2.addEventListener('change', event => {
  let elementosAnimados2 = document.getElementsByClassName('borde-animado')
  for(e of elementosAnimados2){
    if(e.style.animation != "none"){
        e.style.animation = "none"
    }
    else{
        e.style.animation = "border-color-change 5s ease infinite"
    }
  }
  
});

fontSize2.addEventListener("change", event=>{
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