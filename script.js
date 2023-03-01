





console.log("another music player");


let logo = document.querySelector("#logo");
let img_change = document.querySelector("#img_change");
let volume_count = document.querySelector("#volume_count");
let voluem_cut = document.querySelector("#volume_cut");
let right_volume_change = document.querySelector("#volume_change");
let song_name = document.getElementById("song_name");
let pre_button = document.querySelector("#pre");
let play = document.querySelector("#play");
let next_button = document.querySelector("#next");
let audio = document.querySelector("audio");
let change_duration = document.querySelector("#change_duration");
let change = document.getElementById("change");


let increment = 0;
let decrement = 0;
let index_no = 0;

let playing_song = false;

let newAudio = document.createElement("audio");




        

let all_song = [

    {

        name: "first song",
        path: "song1.mp3",
        img: "img1.jpeg"

    },

    {

        name: "second song",
        path: "song2.mp3",
        img: "img2.jpeg"

    },

    {

        name: "third song",
        path: "song3.mp3",
        img: "img3.jpeg"

    },

    {

        name: "fourth song",
        path: "song4.mp3",
        img: "img4.jpeg"

    },

    {

        name: "fifth song",
        path: "song5.mp3",
        img: "img5.jpeg"

    }

]


// function load the newAudio
function load_song(index_no)
{
    song_name.innerHTML = all_song[index_no].name;
    newAudio.src = all_song[index_no].path;
    img_change.src = all_song[index_no].img;
    newAudio.load();
}

load_song(index_no);











// play song



function play_pause()
{
   if(newAudio.paused)
   {
    newAudio.play();
    playing_song = true;
    play.innerHTML = '<i class="fas fa-pause"></i>';
   }
    
   else{
       newAudio.pause();
       playing_song = false;
       play.innerHTML = '<i class="fas fa-play"></i>';
   }

}



// next song

function  next() {
    
    if(index_no < all_song.length - 1)
    {
        index_no += 1;
        load_song(index_no);
        play_pause();  // call the function again
    }
    else
    {
        index_no = 0;
        load_song(index_no);
        play_pause();
    }

}


// previous song

function pre()
{
    if(index_no > 0)
    {
        index_no -= 1;
        load_song(index_no);
        play_pause();  // call the function again
    }
    else
    {
        index_no = all_song.length;
        load_song(index_no);
        play_pause();
    }
}



function volume_change(){
    volume_count.innerHTML = right_volume_change.value;
    newAudio.volume = right_volume_change.value / 100;

}



function left_vol()
{
   newAudio.volume = 0;
}
















