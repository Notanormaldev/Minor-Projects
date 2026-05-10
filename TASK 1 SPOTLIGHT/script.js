let body=document.body;


body.addEventListener("mousemove",function(dets){
           body.style.setProperty('--x',dets.x+"px");
           body.style.setProperty('--y',dets.y+"px");
           
})