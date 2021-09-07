const image = document.getElementById("image")
const play_pause_btn = document.getElementById("play-pause")
const audio = document.getElementById("audio")
const stop_btn = document.getElementById("stop")
const play_pause_icon = document.getElementById("play-pause-icon")
const time = document.getElementById('time')
const vol_up_btn = document.getElementById("vol-up")
const vol_down_btn = document.getElementById("vol-down")
let isplaying = false;

play_pause_btn.addEventListener('click',()=>{
    if(isplaying)
    {
        audio.pause();
        image.style.animationPlayState = "paused" 
        play_pause_icon.classList.add('fa-play-circle')
        play_pause_icon.classList.remove('fa-pause-circle')
        isplaying = false;
    }
    else{
        audio.play();
        image.style.animationPlayState = "running"
        play_pause_icon.classList.add('fa-pause-circle')
        play_pause_icon.classList.remove('fa-play-circle')
        isplaying = true;
    }
});
stop_btn.addEventListener('click',()=>{
    audio.pause();
    audio.currentTime = 0;
    play_pause_icon.classList.add('fa-play-circle')
    play_pause_icon.classList.remove('fa-pause-circle')
    isplaying = false;
    image.style.animationPlayState = "paused"
    clearInterval();
});
window.addEventListener('load', () => {
    time.max = audio.duration;
    setInterval(() => {
        time.value = audio.currentTime
   }, 1000);
})
time.addEventListener('change', ()=>{
    audio.currentTime = time.value
})
audio.addEventListener("ended",() =>{
    image.style.animationPlayState = "paused" 
    play_pause_icon.classList.add('fa-play-circle')
    play_pause_icon.classList.remove('fa-pause-circle')
    isplaying = false;
})
vol_up_btn.addEventListener("click", () =>{
    audio.volume = audio.volume + 0.1;
})
vol_down_btn.addEventListener("click", () =>{
    audio.volume = audio.volume - 0.1;
})
window.addEventListener("keyup", (event)=>{
    if(event.key == 'ArrowUp')
    {
        audio.volume = audio.volume + 0.1;
    }
    else (event.key == 'ArrowDown')
    {
        audio.volume = audio.volume - 0.1;
    }
});