function getnewuser(){
    
fetch('https://randomuser.me/api/')
.then(raw=>raw.json())
.then(result => {
    const {name,email,gender,picture}=result.results[0];
  
    document.querySelector("#parent").innerHTML+= `<div class="card w-52 bg-gray-500 rounded-xl p-4">
            <div class="w-12 h-12 rounded-2xl bg-gray-200 mb-2 overflow-hidden">
                <img src=${picture.large} class="obj-cover" alt="">
            </div>
           <h1 class="font-semibold text-xl">${name.first}</h1>
           <h4 class="opacity-40 text-xs font-semibold ">${gender}</h4>
           <h3 class="opacity-70 mb-4  text-xs font-semibold">${email}</h3>
  
          <p class="text-xs opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur, illo rem maxime aut culpa reprehenderit quod, .</p>
         </div>
      </div>`
})



}

const button=document.querySelector('#bt');

button.addEventListener("click",function(){
    getnewuser();
})