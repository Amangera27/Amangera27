const rect = document.querySelector("#center");

rect.addEventListener("mousemove",(details)=>{
    const recttangleLocation = rect.getBoundingClientRect();
    const insideReactVal = details.clientX -  recttangleLocation.left;

    if(insideReactVal < recttangleLocation.width/2){
        const redcolor = gsap.utils.mapRange(0,recttangleLocation.width/2,255,0,insideReactVal);
        gsap.to(rect,{
            backgroundColor : `rgb(${redcolor}, 0, 0)`,
            ease : Power4
        })
    } else{
        const bluecolor = gsap.utils.mapRange(250,400,0,255,insideReactVal);
        gsap.to(rect,{
            backgroundColor : `rgb(0,0, ${bluecolor})`,
            ease : Power4
        })
    }
})
