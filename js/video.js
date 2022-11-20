// Add js here.
let vid = document.getElementById("videoplayer");
let playback_spd = 1;
let play_time = 0;
let play_length = vid.duration;
let mute = false;


let button_play = document.getElementById("play");
let button_pause = document.getElementById("pause");
let button_slower = document.getElementById("slower");
let button_faster = document.getElementById("faster");
let button_skip = document.getElementById("skip");
let button_mute = document.getElementById("mute");
let slider_vol = document.getElementById("slider");



// let button_play = document.getElementsByClassName("options");
// console.log(button_play);
// console.log(vid);
button_play.addEventListener("click", playVid);
button_pause.addEventListener("click", pauseVid);
button_slower.addEventListener("click", slowVid);
button_faster.addEventListener("click", speedVid);
button_skip.addEventListener("click", skipVid);
button_mute.addEventListener("click", mute_unmute_Vid);
slider_vol.addEventListener("change", change_vol_Vid);

let output = slider_vol['value'];
let slider_output_value = document.getElementById("volume");
slider_output_value.innerHTML = (`<span id="volume">${output}</span>`);

vid.autoplay = false;
vid.load();
button_play.innerHTML = (`<button id="slower">Play Video (${playback_spd}x) </button>`);

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

function slowVid() {

    if (playback_spd === 1) {
        playback_spd = 0.5;
        button_play.innerHTML = (`<button id="slower">Play Video (${playback_spd}x) </button>`);
    }
    else if (playback_spd === 0.5) {
        alert("Video is at slowest speed!");
    }
    else {
        playback_spd = 1;
        button_play.innerHTML = (`<button id="slower">Play Video (${playback_spd}x) </button>`);
    }

    vid.playbackRate = playback_spd;
    // console.log(playback_spd);
}

function speedVid() {

    if (playback_spd === 1) {
        playback_spd = 2;
        button_play.innerHTML = (`<button id="slower">Play Video (${playback_spd}x) </button>`);
    }
    else if (playback_spd === 2) {
        alert("Video is at fastest speed!");
    }
    else {
        playback_spd = 1;
        button_play.innerHTML = (`<button id="slower">Play Video (${playback_spd}x) </button>`);
    }
    vid.playbackRate = playback_spd;
    // console.log(playback_spd);

}

function skipVid() {

    play_time += 15;

    if (play_time >= vid.duration) {
        vid.loop = true;
        vid.play();
        play_time = 0;
    }
    
    vid.currentTime = play_time;
    vid.play();
    // console.log(`play time: ${play_time}`);
    console.log(`length: ${vid.duration}`);
}

function mute_unmute_Vid() {
    let old_vol = vid.volume;

    if (mute === false) {
        button_mute.innerHTML='<button id="mute">Unmute</button>';
        
        

        vid.muted = true;
        mute = true;

        slider_vol['value'] = 0;
        slider_output_value.innerHTML = (`<span id="volume">0</span>`);
        // vid.volume = 0;
    }
    else {
        button_mute.innerHTML='<button id="mute">Mute</button>';
        vid.muted = false;
        mute = false;
        output = old_vol * 100;
        slider_vol['value'] = output;
        slider_output_value.innerHTML = (`<span id="volume">${output}</span>`);
        vid.volume = output/100;
    }
}

function change_vol_Vid() {
    output = slider_vol['value'];
    // slider_output_value = document.getElementById("volume");
    slider_output_value.innerHTML = (`<span id="volume">${output}</span>`);
    vid.volume = output/100;
    // console.log(slider_output_value)
}