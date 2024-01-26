let main = document.querySelector("main");

let crsr = document.querySelector(".crsr");

main.addEventListener("mousemove",(dets) => {
    crsr.style.top = dets.y+"px";
    crsr.style.left = dets.x+"px";
    crsr.style.opacity="1";
    crsr.style.scale= "1";
    
    
})