let main=document.querySelector('main');
let btn=document.querySelector('button');


btn.addEventListener('click',()=>{
let div=document.createElement('div');

let x=Math.random()*100;
let y=Math.random()*100;


let c1=Math.floor(Math.random()*256)
let c2=Math.floor(Math.random()*256)
let c3=Math.floor(Math.random()*256)



div.style.width='50px';
div.style.height='50px';
div.style.position='absolute';

div.style.left=x+'%';
div.style.top=y+'%';

div.style.background=`rgb(${c1},${c2},${c3})`


main.appendChild(div);

})