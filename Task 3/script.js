let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

song.onloadedmetadata = function()
{
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause()
{
    if(controlIcon.classList.contains("./Media/pause.png")){
        song.pause();
        controlIcon.classList.remove("./Media/pause.png");
        controlIcon.classList.add("./Media/play-button.png");
    }
    else
    {
        song.play();
        controlIcon.classList.add('./Media/pause.png');
        controlIcon.classList.remove('./Media/play-button.png');
    }
}

if(song.play())
{
    setTimeout(()=> {
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function()
{
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.add('/Media/pause.png');
    controlIcon.classList.add('/Media/play-button.png');

}