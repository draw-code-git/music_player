  const rage=[
"Rage/नalla Freestyle (Visualizer)  Seedhe Maut x DJ SA.mp3",
"Rage/Seedhe Maut - 101.mp3" 
]


const chill = [ 'chill/Zindagi Se Maut Tak - Talha Anjum (LYRICS)  Indian Turbo.mp3' ,
   'chill/Guldasta.mp3',
   'chill/Bas Jhut.mp3',
  'chill/Hausla - Seedhe Maut.mp3' ,
'chill/RAWAL x Bharg - Baat Bangayi  Sab Chahiye  Official Music Video.mp3',
'chill/RAWAL x Bharg x Encore ABJ - MAGAN.mp3',
"chill/Seedhe Maut - 'NAWAZUDDIN'.mp3",
'chill/Seedhe Maut - BURE DIN ft. Mick Jenkins (Prod. Hisab).mp3',
'chill/Seedhe Maut , Hurricane - PANCAKE  DL91 FM.mp3',
'flex/Hasan Raheem - Aisay Kaisay ft Abdullah Kasumbi.mp3',
'flex/Talha Anjum - Desperation (Lyrics).mp3',
'chill/Seedhe Maut - Hanging On (Audio) [From 2 Ka Pahada MixTape].mp3',
'chill/tour shit.mp3',
'chill/Video Games.mp3',
"chill/'Kohra' (Official Lyric Video)  Seedhe Maut x Sez on the Beat  Nayaab.mp3",
'flex/Wish You Were Here.mp3'
];

const flex=[...chill,...rage ];

let i = 0;

let currentPlaylist = chill;

const buttons = document.querySelectorAll(".buttons");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(btn=>btn.classList.remove("active"))

    btn.classList.add("active"); // clicked button turns gradient 
    

  });
});

const Pause = document.querySelector("#pause"); //pause button

const Play = document.querySelector("#play"); //play button


const CHILL = document.querySelector("#chill"); //chill-btn
const RAGE = document.querySelector("#rage"); //rage-btn
const FLEX = document.querySelector("#flex"); // flex-btn
const audio = document.querySelector("#audio-player"); //audio
const back = document.querySelector("#back"); // back-btn
const next = document.querySelector("#next"); //next-btn
const blank = document.querySelector("#song-name"); // accessing the paragraph tags 



  

// set initial Chill song
audio.src = currentPlaylist[i];

updateName();

function updateName(){
    const path = currentPlaylist[i];
    const name = path.split("/").pop().replace(/\.[^/.]+$/, "");
    blank.innerHTML = name;

}


// NAME=path.split("/").pop();
audio.load();
// Play/pause toggle
function toggle() {
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
    Play.classList.toggle('hide');
    Pause.classList.toggle('hide');
}

Play.addEventListener("click", toggle);
Pause.addEventListener("click", toggle);

next.addEventListener("click",nextSong);
back.addEventListener("click",lastSong);


function nextSong(){
if(i==currentPlaylist.length-1){i=0;
  audio.src=currentPlaylist[i];
  updateName();
  audio.load();
  audio.play();
}
  else{

     audio.src = currentPlaylist[i+1];
 audio.load();
audio.play();
i++;
updateName();
Play.classList.add('hide');    // hide the Play button
Pause.classList.remove('hide'); // show the Pause button

  }

}

function lastSong(){


if(i==0){i=(currentPlaylist.length)-1
  audio.src = currentPlaylist[i];
  updateName();
  audio.load();
  audio.play();

} else{
  i--;
audio.src = currentPlaylist[i];
updateName();
 audio.load();
audio.play();
Play.classList.add('hide');    // hide the Play button
Pause.classList.remove('hide'); // show the Pause button

}

}

RAGE.addEventListener("click",reset);
CHILL.addEventListener("click",resetChill);
FLEX.addEventListener("click",resetFlex);

audio.addEventListener("ended",nextSong)

function reset(){

  i=0;
  currentPlaylist=rage;
  audio.src = currentPlaylist[i];
  updateName();
  audio.load();
  audio.play();
  Play.classList.add('hide');    // hide the Play button
Pause.classList.remove('hide'); // show the Pause button


}

function resetChill(){

  i=0;
  currentPlaylist=chill;
  audio.src = currentPlaylist[i];
  updateName();
  audio.load();
  audio.play();
  Play.classList.add('hide');    // hide the Play button
Pause.classList.remove('hide'); // show the Pause button


}

function resetFlex(){

  i=Math.floor(Math.random() * flex.length);
  currentPlaylist=flex;
  audio.src = currentPlaylist[i];
  updateName();
  audio.load();
  audio.play();
  Play.classList.add('hide');    // hide the Play button
Pause.classList.remove('hide'); // show the Pause button


}






















































