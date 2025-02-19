let img = document.getElementById("img-c")
let carrouselInfo = document.getElementById("carrousel-info")
let imgSrcList = [
    "img/hechicero.webp",
    "img/paladin.webp",
    "img/monk.webp",
    "img/archer.webp"
]
let infoHechicero = document.getElementById("info-1")
let infoPaladin = document.getElementById("info-2")
let infoLuchador = document.getElementById("info-3")
let infoArquero = document.getElementById("info-4")
imgSrcListIndex = 1;
let prev = document.getElementById("boton-prev")
let next = document.getElementById("boton-next")

next.addEventListener("click",(event)=>{

    switch(imgSrcListIndex){
        case 1:
            img.src = imgSrcList[1]
            img.setAttribute("alt", "imagen del rol: paladin")
            infoHechicero.style.display = "none"
            infoPaladin.style.display = "block"
            imgSrcListIndex++;
            break;
        case 2:
            img.src = imgSrcList[2]
            img.setAttribute("alt", "imagen del rol: luchador")
            infoPaladin.style.display = "none"
            infoLuchador.style.display = "block"
            imgSrcListIndex++;
            break;
        case 3:
            img.src = imgSrcList[3]
            img.setAttribute("alt", "imagen del rol: arquero")
            infoLuchador.style.display = "none"
            infoArquero.style.display = "block"
            imgSrcListIndex++;
            break;
        case 4:
            img.src = imgSrcList[0]
            img.setAttribute("alt", "imagen del rol: hechicero")
            infoArquero.style.display = "none"
            infoHechicero.style.display = "block"
            imgSrcListIndex= 1;
            break;
    }

})
prev.addEventListener("click",(event)=>{

    switch(imgSrcListIndex){
        case 1:
            img.src = imgSrcList[3]
            img.setAttribute("alt", "imagen del rol: arquero")
            infoHechicero.style.display = "none"
            infoArquero.style.display = "block"
            imgSrcListIndex = 4;
            break;
        case 2:
            img.src = imgSrcList[0]
            img.setAttribute("alt", "imagen del rol: hechicero")
            infoPaladin.style.display = "none"
            infoHechicero.style.display = "block"
            imgSrcListIndex--;
            break;
        case 3:
            img.src = imgSrcList[1]
            img.setAttribute("alt", "imagen del rol: paladin")
            infoLuchador.style.display = "none"
            infoPaladin.style.display = "block"
            imgSrcListIndex--;
            break;
        case 4:
            img.src = imgSrcList[2]
            img.setAttribute("alt", "imagen del rol: luchador")
            infoArquero.style.display = "none"
            infoLuchador.style.display = "block"
            imgSrcListIndex--;
            break;
    }

})
// prev.addEventListener("click",(event)=>{

//     switch(imgSrcListIndex){
//         case 1:
//             img.src = imgSrcList[3]
//             imgSrcListIndex++;
//             break;
//         case 2:
//             img.src = imgSrcList[2]
//             imgSrcListIndex++;
//             break;
//         case 3:
//             img.src = imgSrcList[1]
//             imgSrcListIndex++;
//             break;
//         case 4:
//             img.src = imgSrcList[0]
//             imgSrcListIndex= 1;
//             break;
//     }

// })
