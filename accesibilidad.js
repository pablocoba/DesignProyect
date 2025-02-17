let fontSize = document.getElementById("fontSize")
document.addEventListener("DOMContentLoaded",event=>{
    fontSize.checked = false;
})
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