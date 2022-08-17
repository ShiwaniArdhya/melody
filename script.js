console.log("Welcome to Media Player!")
// initialise the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Pasoori - Shae Gill, Ali Sethi", filePath:"songs/1.mp3", coverPath:"covers/1.png"},
    {songName:"As It Was - Harry Styles", filePath:"songs/2.mp3", coverPath:"covers/2.png"},
    {songName:"RangiSari -Kavita Seth", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"NO LOVE - Shubh", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Heat Waves - Glass Animals", filePath:"songs/5.mp3", coverPath:"covers/5.png"},
    {songName:"Dandelions - Ruth B.", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Excuses - AP Dhillon", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Kesariya - Pritam, Arijit Singh", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Jhoom - R&B Mix- Ali Zafar", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"MIDDLE OF THE NIGHT-Elley Duhe", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
    ];

    songItem.forEach((element, i) => {

        element.getElementsByTagName('img')[0].src=songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    });

    // handle play/pause click
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            gif.style.opacity=0;

        }

    });

    // Listen to events
    audioElement.addEventListener('timeupdate',()=>{

        // update seekbar
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

        myProgressBar.value=progress;
    });

    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    });


    // makeplay function for changing buttons icons
    const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
            })
    }

    // PLAYBUTTOM IN SONG NAME
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();

            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src='songs/'+songIndex+'.mp3';
            masterSongName.innerText=songs[songIndex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        })


    })

// previous and next buttons
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src='songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');

})
