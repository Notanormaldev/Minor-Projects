const reels = [
    {   
        isMuted:true,
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "https://www.pexels.com/download/video/5752365/",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        isMuted:true,
        username: "designbysan",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "https://www.pexels.com/download/video/6447700/",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        isMuted:true,
        username: "frontend.ninja",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "https://www.pexels.com/download/video/6388425/",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        isMuted:true,
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "https://www.pexels.com/download/video/5245516/",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        isMuted:true,
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "https://www.pexels.com/download/video/5377976/",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
        isMuted:true,
        username: "fitnessbymegha",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "https://www.pexels.com/download/video/3324489/",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        isMuted:true,
        username: "streetfoodlover",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "https://www.pexels.com/download/video/29824639/",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
        isMuted:true,
        username: "musicbytara",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Late night vibes // piano version 🎹✨",
        video: "./videoplayback.mp4",

        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        isMuted:true,
        username: "techreviews101",
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "The most underrated smartphone of 2024 📱",
        video: "https://www.pexels.com/download/video/19901160/",

        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
        isMuted:true,
        username: "learnanimations",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "GSAP can literally change your career. Start today.",
        video: "https://www.pexels.com/download/video/30418809/",

        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

let allreels=document.querySelector('.allreels');

function alldata(){
    var clutter='';
reels.forEach((elem,idx)=>{
   
    
    clutter+=`<div class="reel">
                <video autoplay ${elem.isMuted ? 'muted' : ''} loop src="${elem.video}"></video>
                <div class="mute" id=${idx}>
          ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}</div>
                <div class="bottom">
                   <div id="img">
                      <img src="${elem.userprofile}" alt="">
                    <h1>${elem.
                        username}
                    </h1>
                    <button class='follow' id='${idx}'>${elem.isFollowed?"Unfollow":"Follow"}</button>
                   </div>
                   <div id="p">
                   ${elem.caption}
                   </div> 
                </div>
                <div class="right">
                   <div id='${idx}' class="like"> ${elem.isLiked?'<i id="love" class="ri-heart-3-fill"></i>':'<i   class="ri-heart-3-line"></i>'}
                        <h1>${elem.likeCount}</h1></div>
                    <div class="comment">
                        <i class="ri-chat-1-line"></i>
                        <h1>${elem.commentCount}</h1>
                    </div>
                   <div class="share">
                     <i class="ri-share-forward-line"></i>
                     <h1>${elem.shareCount}</h1>
                   </div>
                   <div class="more">
                     <i class="ri-more-2-line"></i>
                   </div>
                </div>
            </div>`

})
allreels.innerHTML=clutter;
}
alldata();


allreels.addEventListener("click",(dets)=>{
   if(dets.target.className==='like'){
  if(reels[dets.target.id].isLiked===false){
    reels[dets.target.id].likeCount++; 
    reels[dets.target.id].isLiked=true;
  }
  else{
     reels[dets.target.id].likeCount--;
    reels[dets.target.id].isLiked=false;
  }
  
}
    if(dets.target.className==='follow'){
  if(reels[dets.target.id].isFollowed===false){
    reels[dets.target.id].isFollowed=true;
  }
  else{
    reels[dets.target.id].isFollowed=false;
  }


  
}
  if(dets.target.className==='mute'){
  if(reels[dets.target.id].isMuted===false){
    reels[dets.target.id].isMuted=true;
  }
  else{
    reels[dets.target.id].isMuted=false;
  }
  
  
}  

alldata();
 
})
