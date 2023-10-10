
// Changing images

$(document).ready(function () {
    var images = ["./imgs/background1.jpg","./imgs/background2.jpg"]
    var current = 0

    setInterval(function () {
    if( current > images.length ){
        current = 0
    }
      $("#change-img").attr("src",images[current])
        current++
    },4000)
})  

// song maker
var songsList=[]
function makeSong(img,track,artist,producers,samples,genre){
    var song = {
        img,
        track,
        artist,
        producers,
        samples,
        genre,
    }
    songsList.push(song)
    return song
    
}

var virginiaBeach= makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr123981_2023106_9577594715.jpg","Virginia Beach","Drake",": Noah 40 Shebib, Harley Arsenault","https://youtu.be/PVRbKHXwM58","Trap")
var kingKunta = makeSong("https://www.whosampled.com/static/images/media/track_images/r13707_2022513_81632892239.jpg","We Cry Together","Kendrick Lamar ft Dr.Dre"," The Alchemist, Emile Haynie, J.LBS, Bēkon","https://youtu.be/Sosmd6RjeA0?si=z7rLR-1Egcj7zxzp","Hip-Hop / Rap / R&B")
var Bound2 = makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr60124_20131018_12103214828.jpg","Bound 2","Kanye West","Kanye West, Ché Pope, Eric Danchick, Noah Goldstein, No I.D., Mike Dean","https://youtu.be/6yvX9l2PfRg","Hip-Hop / Rap / R&B")
var Power = makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr2929_2010811_124147110784.jpg","Power","Kanye west","Kanye West, Symbolyc One, Jeff Bhasker","https://youtu.be/e-dtwySzcQc"," Hip-Hop / Rap / R&B")
var Mercy= makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr59035_20121112_1252163207.jpg","Mercy","Kanye West"," Lifted, Hudson Mohawke, Mike WiLL Made It","https://youtu.be/pWhCgE6ZkSk","Hip-Hop / Rap / R&B")
var rings = makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr132453_2019118_52356404652.jpg","7 Rings","Ariana Grande","Tommy Brown, Michael Foster, Charles Anderson","https://www.youtube.com/watch?v=vhLMfI_xoWY"," Rock / Pop")

var Wanna = makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr2_200899_182131126513.jpg","Wanna Be Startin' Somethin'","Michael Jackson"," Quincy Jones, Michael Jackson","https://youtu.be/aWK_Josc0Og","Soul / Funk / Pop")

var beatit = makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr2_2009622_141245699102.jpg","Beat it","Michael Jackson"," Michael Jackson, Quincy Jones","https://youtu.be/UaiBhPWWvKs"," Rock / Pop")


var levels = makeSong("https://www.whosampled.com/static/images/media/track_images_100/mr60124_2013419_123848171607.jpg","Levels","Avicii","Avicii","https://www.youtube.com/watch?v=OueyaMoUUt4","Electronic / House")
// display all song


function allSongs() {
    $("#songs").empty()
    $("#songs").css("display", "block")
  
    
    songsList.forEach(function (e) {
        
        $("#songs").append(`
            <div class ="song">
            <h1 class="track">${e.track}</h1>
       
       <img class ="img" src=${e.img}></img>
       <h2 class="side-write">${e.artist}</h2>
       <h3 class="side-write">${e.genre}</h3>
       
       <h1 class="play" class="material-symbols-outlined"><a href=${e.samples}>Play sample</a></h1>
   <h5 class="producers">Produced by: ${e.producers} </h5>
       
        </div>`
    )
})
}
function close(){
    $("#songs").css("display", "none")
    
}
// display rap songs

function rapSongs() {
    $("#songs").empty()
    $("#songs").css("display", "block") 
   songsList.forEach(function (e) {
    if (e.genre.toLowerCase().includes("rap")) {
        $("#songs").append(`
        <div class ="song">
        <h1 class="track">${e.track}</h1>
   
   <img class ="img" src=${e.img}></img>
   <h2 class="side-write">${e.artist}</h2>
   <h3 class="side-write">${e.genre}</h3>
   
   
   <h1 class="play" class="material-symbols-outlined"><a href=${e.samples}>Play sample</a></h1>
   <h5 class="producers">Produced by: ${e.producers} </h5>
    </div>`
)
        
    }
    
   })
    
}

// display popSongs

function popSongs() {
    $("#songs").empty()
    $("#songs").css("display", "block")
    songsList.forEach(function (e) {
     if (e.genre.toLowerCase().includes("pop")) {
        $("#songs").append(`
        <div class ="song">
        <h1 class="track">${e.track}</h1>
   
   <img class ="img" src=${e.img}></img>
   <h2 class="side-write">${e.artist}</h2>
   <h3 class="side-write">${e.genre}</h3>
   
   <h1 class="play" class="material-symbols-outlined"><a href=${e.samples}>Play sample</a></h1>
   <h5 class="producers">Produced by: ${e.producers} </h5>
    </div>`
 )
         
     }
     
    })
     
 }



 function trapSongs() {
    $("#songs").empty()
    $("#songs").css("display", "block")
    songsList.forEach(function (e) {
        
     if (e.genre.toLowerCase().includes("trap")) {
        $("#songs").append(`
        <div class ="song">
        <h1 class="track">${e.track}</h1>
   
   <img class ="img" src=${e.img}></img>
   <h2 class="side-write">${e.artist}</h2>
   <h3 class="side-write">${e.genre}</h3>
   <h1 class="play" class="material-symbols-outlined"><a href=${e.samples}>Play sample</a></h1>
   <h5 class="producers">Produced by: ${e.producers} </h5>
    </div>`
 )
         
     }
     
    })
     
 }


//  display House Songs
function houseSongs() {
    $("#songs").empty()
    $("#songs").css("display", "block")
    songsList.forEach(function (e) {
     if (e.genre.toLowerCase().includes("house")) {
        $("#songs").append(`
        <div class ="song">
        <h1 class="track">${e.track}</h1>
   
   <img class ="img" src=${e.img}></img>
   <h2 class="side-write">${e.artist}</h2>
   <h3 class="side-write">${e.genre}</h3>
   <h1 class="play" class="material-symbols-outlined"><a href=${e.samples}>Play sample</a></h1>
   <h5 class="producers">Produced by: ${e.producers} </h5>
    </div>`
 )
         
     }
     
    })
     
 }


//  SEARCH BAR
function search() {
    $("#songs").empty();
 $("#songs").css("display", "block");
      var value = $(".srch").val().toLowerCase();
    songsList.forEach(function (e) {
     if (e.artist.toLowerCase().includes(value) || e.track.toLowerCase().includes(value) || e.genre.toLowerCase().includes(value)) { 
     $("#songs").append(`
         <div class="song">
      <h1 class="track">${e.track}</h1>
      <img class="img" src="${e.img}"></img>
      <h2 class="side-write">${e.artist}</h2>
      <h3 class="side-write">${e.genre}</h3>
      <h1 class="play" class="material-symbols-outlined"><a href=${e.samples}>Play sample</a></h1>
      <h5 class="producers">Produced by: ${e.producers} </h5>
                </div>
            `);
        }
    });
}



