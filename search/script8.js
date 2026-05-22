//create a search bar that displays live serch results as users type , updating the results without requiring a full page reload.


var data =[
   {name:"harsh",src:"https://imgs.search.brave.com/UQK_63G9oaYVxFTXRYt-TtlbfRO0b1ejgpjAogBgxzU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NjkwOTczNy9waG90/by9jb2xvdXJmdWwt/c3R1ZGlvLXBvcnRy/YWl0LW9mLWEteW91/bmctbWFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1NdmpG/MFpuaVlhSXVGUU5u/SE56cTZxNnhuM3h1/di1wUWxHbVA4Mk9f/Qi1RPQ"},
   {name:"harshita",src:"https://imgs.search.brave.com/8Wsj2M5XZmdoTqjCTqCdwaFpq2JcXGeIQif_z2GNwGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zZXh5/LWZlbWFsZS1tb2Rl/bC0xODMwMTczOC5q/cGc"},
   {name:"nily",src:"https://imgs.search.brave.com/0MV0XSKdI4WGSfJ46hbbBvFKhwa4cmBpiJcYzFmfOog/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MDAxLzg3NS9zbWFs/bC9hZG9yYWJsZS15/b3VuZy1mZW1hbGUt/bW9kZWwtaW4ta25p/dHRlZC1kcmVzcy1w/b3Npbmctc2VhdGVk/LW9uLWNoYWlyLWFn/YWluc3QtYmVpZ2Ut/d2FsbC1waG90by5K/UEc"},
   {name:"nillyi",src:"https://imgs.search.brave.com/M_XoVDCWCOEuhWxvYpbUITO51rOK3mUyFI8vlunLWKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93b21h/bi1iZWF1dHktZmFj/ZS15b3VuZy1mYXNo/aW9uLW1vZGVsLW1h/a2V1cC1za2luLWNh/cmUtcG9ydHJhaXQt/aXNvbGF0ZWQtb3Zl/ci13aGl0ZS1iYWNr/Z3JvdW5kLTg3Mjky/OTU4LmpwZw"}
]

var persn="";//aya am nai choday ke k += atle undefine += thay che e rokva mate
data.forEach(function(elem){
    persn +=`<div id="person">
                    <img src="${elem.src}" alt="">
                    <h4>${elem.name}</h4>
                </div>`
})

var people=document.querySelector("#people");
people.innerHTML=persn;


var input=document.querySelector("input");
input.addEventListener("input",function(){ //input what we type
      var matching=data.filter(function(e){
          return e.name.startsWith(input.value)  //filter is like a foreach ak ak lay ne check kr but ama return thay j
      })
  var newuser="";  
   matching.forEach(function(elem){
    newuser +=`<div id="person">
                    <img src="${elem.src}" alt="">
                    <h4>${elem.name}</h4>
                </div>`
})

var people=document.querySelector("#people");
people.innerHTML=newuser;   
    
})




