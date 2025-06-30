console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Zikr.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
	{songName: "Ae Dil Hai Mushkil" , filePath: "song/0.mp3" ,coverPath:"covers/1.jpg"},
	{songName: "Bewafa Tera Masoom Chehra" , filePath: "song/1.mp3" ,coverPath:"covers/2.jpg"},
	{songName: "Kanhaiya-Meri-Laaj-Rakhna" , filePath: "song/2.mp3" ,coverPath:"covers/3.jpg"},
	{songName: "Tu Bhi Sataya Jayega" , filePath: "song/3.mp3" ,coverPath:"covers/4.jpg"},
	{songName: "Hasi Shreya Ghoshal" , filePath: "song/4.mp3" ,coverPath:"covers/5.jfif"},
	{songName: "We-Don't-Talk-Anymore" , filePath: "song/5.mp3", coverPath:"covers/6.jpg"},
]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


//audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
        else{
             audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
         gif.style.opacity = 0;
        }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Udate seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})
myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause');
         element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0
    }else{
        songIndex+=1;
    }
     audioElement.src = `song/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime =0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex -=1;
    }
     audioElement.src = `song/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime =0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

})