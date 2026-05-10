let img=document.querySelector('img');

let body=document.body;

body.addEventListener("mousemove",(det)=>{
    img.style.left=det.x+"px";
    img.style.top=det.y+"px";
    
})

body.addEventListener("keydown",(dets)=>{
          console.log(dets.code);
          
})