let chara='ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz';
let h1=document.querySelector('h1');
let h1text=h1.textContent;

let inter=0; 
h1.addEventListener('mouseenter',()=>{
   function add(){
     let str=h1text.split("").map(function(char,idx){
      if(idx<inter){
         return char;
      }
      return chara.split("")[Math.floor(Math.random()*53)]
    }).join("")
    h1.innerHTML=str;
    inter+=0.2;
   }
   setInterval(add,30)
})
