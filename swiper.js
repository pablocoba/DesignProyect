const swiper = new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween:30,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

        centeredSlides: true,
        effect:'creative',
    longSwipes: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 1
        },
        1024:{
            slidesPerView: 5
        }
    }
});

//highlightea la tarjeta del medio.
function fc() {
    const active = document.querySelector('.swiper-slide-active');
    const info = document.querySelectorAll('.character-info') //pillo la info.
    info.forEach(element=>{
        if(element.getAttribute('aria-label') === active.getAttribute('aria-label')){
            element.style.display = 'flex'
        }
        else{
            element.style.display = 'none';
        }
    })
    const todos = document.querySelectorAll('.swiper-slide')
    todos.forEach(element=>{
        if(!element.classList.contains('swiper-slide-active')){
            element.style.opacity = 0 ;
        }
        else{
            element.style.opacity=1
        }
    })
    
}
fc()
document.addEventListener("click", fc) //cuando detecte clips va a ver cual es la slide principal y a ocultar las demás.
swiper.on("transitionEnd",fc) //lo mismo pero con swipes.
const atras = document.querySelector(".swiper-button-prev")
atras.addEventListener("click", fc)
const alante = document.querySelector(".swiper-button-next")
alante.addEventListener("click", fc)