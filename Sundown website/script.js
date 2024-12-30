const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function imagesAdd(){
    let fixed =  document.querySelector(".fixed-image");
    let elemC = document.querySelector(".elem-container");
    let elems = document.querySelectorAll(".elem");
    
    elems.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            let image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`
        })
    })
    
    elemC.addEventListener("mouseenter",()=>{
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",()=>{
        fixed.style.display = "none"
    })
}
imagesAdd();


const heading = document.querySelectorAll(".yellow h1");
const back =  document.querySelector(".dark");
const texting = document.querySelector(".yellow p")


heading.forEach((e)=>{
    e.addEventListener("click",()=>{
        const images = e.getAttribute("data-image");
        back.style.backgroundImage =  `url(${images})`

    heading.forEach((hii)=>{
        hii.style.paddingLeft = "2vw";
        hii.style.color = "#ffffff57";
    });

    e.style.paddingLeft = "0px";
    e.style.color = "#fff"

    const text = e.getAttribute("data-text");
    texting.innerHTML = text

});
})

//swiperjs
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}

swiperAnimation();



