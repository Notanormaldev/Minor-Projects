let btn=document.querySelector('button');
let h1=document.querySelector('h1');
let inner=document.querySelector('#inner');

let grow=0;
btn.addEventListener('click',()=>{

   let time=50 + Math.floor(Math.random()*50);
   
   console.log(`song will be download in ${time/10} secs` );
   
   
    btn.style.pointerEvents='none';
    
   let int=setInterval(()=>{
     grow++;
    h1.innerHTML=grow+"%";
    inner.style.width=grow+"%";
   },time)

   setTimeout(()=>{
      clearInterval(int);
      btn.innerHTML='Downloaded';
      btn.style.opacity=0.5;
   },time*100)
    
})
