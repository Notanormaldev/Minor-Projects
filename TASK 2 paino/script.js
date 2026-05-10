let body = document.body;
const pianoKeys = {
  a:  { type: "white", sound: "./Sound/28.mp3" },
  "1":{ type: "black", sound: "./Sound/29.mp3" },

  b:  { type: "white", sound: "./Sound/30.mp3" },
  "2":{ type: "black", sound: "./Sound/31.mp3" },

  e:  { type: "white", sound: "./Sound/32.mp3" },

  t:  { type: "white", sound: "./Sound/33.mp3" },
  "3":{ type: "black", sound: "./Sound/34.mp3" },

  w:  { type: "white", sound: "./Sound/35.mp3" },
  "4":{ type: "black", sound: "./Sound/36.mp3" },

  z:  { type: "white", sound: "./Sound/37.mp3" },
  "5":{ type: "black", sound: "./Sound/38.mp3" },

  k:  { type: "white", sound: "./Sound/39.mp3" },

  r:  { type: "white", sound: "./Sound/40.mp3" },
  "6":{ type: "black", sound: "./Sound/41.mp3" },

  j:  { type: "white", sound: "./Sound/42.mp3" },
  "7":{ type: "black", sound: "./Sound/43.mp3" },

  s:  { type: "white", sound: "./Sound/44.mp3" },
  "8":{ type: "black", sound: "./Sound/45.mp3" },

  q:  { type: "white", sound: "./Sound/46.mp3" },
  "9":{ type: "black", sound: "./Sound/47.mp3" },

  y:  { type: "white", sound: "./Sound/48.mp3" },
  "0":{ type: "black", sound: "./Sound/49.mp3" },

  m: { type: "white", sound: "./Sound/50.mp3" },
  "-":{ type: "black", sound: "./Sound/51.mp3" },

  o:  { type: "white", sound: "./Sound/52.mp3" },
  "=":{ type: "black", sound: "./Sound/53.mp3" },

  n: { type: "white", sound: "./Sound/54.mp3" }
};



body.addEventListener('keydown',(dets)=>{
    const key=dets.key.toLowerCase();

    if(pianoKeys[key]){
        const audio=new Audio(pianoKeys[key].sound);
        audio.currentTime = 0;
        audio.play();
    }
    
    
})
