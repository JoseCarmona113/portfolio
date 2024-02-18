

/*FUNCTIONS */

/*Function to get time */
setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

/* TOGGLE FUNCTION */
function toggleElementVisibility(element) {
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

/* HIDE FUNCTION*/
const hideElementVisibility = (...elements) => {
  elements.forEach((element) =>{
    if(element.style.display === "block"){
      element.style.display = "none"
    }
  })
};



/*DARKMODE FUNCTION */
const darkModeToggle = (element) => {
  element.forEach((element) => {
    if (
      element.style.backgroundColor == "" &&
      element.style.borderTopColor == "" &&
      element.style.borderLeftColor == ""&&
      element.style.color == ""
    ) {
      element.style.transition = "background-color 0.2s, border-top 0.2s";
      element.style.backgroundColor = "#2d2d30";
      element.style.borderTopColor = "#58585d";
      element.style.borderLeftColor = "#58585d";
      element.style.color = "white";
    } else {
      element.style.backgroundColor = "";
      element.style.borderTopColor = "";
      element.style.borderLeftColor = "";
      element.style.color = "";
    }
  });
};

/* RADIO FUNCTIONS */
function playRadio() {
  radioPlayer.play();
}

function pauseRadio() {
  radioPlayer.pause();
}

function setVolume(volume) {
  radioPlayer.volume = volume;
}


/* Function to start radio visualizer */
function visualizerStart() {
  if (visualizer.paused) {
    visualizer.play();
  }
}


/* Player timer function */
function startTimer(...element){
  element.forEach((element) =>{
    
    switch(element){
      case 'minutes':{
        timerInterval = setInterval(() =>{
          timerMinutes.innerHTML++;
        },60 * 1000);
      }
      break;

      case 'seconds' :{
        timerInterval = setInterval(() =>{
          timerSeconds.innerHTML++;
        },1000);
      }
      break;

      case 'miliseconds':{
        timerInterval = setInterval(() =>{
          timerMiliseconds.innerHTML++;
        },1);
        break;
      }
    }

  })

}

function stopTimer(){
  clearInterval(timerInterval);
}


/* player button functions */

function longPress(element){
  element.classList.toggle('active');
}


function longPressRemove(...e){
e.forEach(e =>{
  if(e.classList.contains('active')){
    e.classList.remove('active')
  }
})
}

/* Function to stop radio visualizer */
function visualizerStop() {
  if (visualizer.play) {
    visualizer.pause();
  }
}

/*Index function for stacking effect */
function incrementIndexOnClick(element) {
  zIndexCounter++;
  element.style.zIndex = zIndexCounter;
}

/*END OF FUNCTIONS */

/* All VARIABLES  */

/* TICTAC-TOE GAME VARIABLES */
const ticTacContainer = document.getElementById("tictac-container");
let ticTacSpan = document.getElementById("tictac-span");

let iconDiv = document.querySelector(".icondiv");

/* TIME VARIABLE */
let time = document.getElementById("current-time");

/* TASKBAR TABS VARIABLES */
let taskBarIcon = document.getElementById("taskbar-icon");

/* INDEX INCREMENT VARIABLES */
let zIndexCounter = 0;

/*BIOGRAPHY VARIABLES */
let bioSpan = document.getElementById("bio-span");
let bio = document.getElementById("bio-container");

/*PHOTOS VARIABLES */
let photoSpan = document.getElementById("photo-span");
let photos = document.getElementById("photos-container");

/* VISUALIZER VARIABLE*/
let visualizer = document.getElementById("visualizer");

/* AUDIO CONTROL VARIABLES */
let audio = document.getElementById("audio");
let speakerIcon = document.getElementById("speaker");
let volumeRange = document.getElementById("volume-range");

/* RADIO PLAYER VARIABLE */
const radioPlayer = document.getElementById("audio-player");

/*MUSIC VARIABLES */
let musicIcon = document.getElementById("musicicon");
let Player = document.getElementById("player");

/* PLAYER TIMER VARIABLES */
const timerMinutes = document.getElementById('minutes');
const timerSeconds = document.getElementById('seconds');
const timerMiliseconds = document.getElementById('miliseconds');


/* MUSIC PLAYER BUTTONS VARIABLES */
const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const pauseButton = document.getElementById("pause-button");

/* DARKMODE VARIABLES*/
const darkMode = document.getElementById("darkmode");
let darkModeContainers = document.querySelectorAll(".darkmode-container");

/*DROPDOWN VARIABLES */
let dropDown = document.getElementById("dropdown");
let startButton = document.getElementById("startbutton");
let main = document.getElementById("main");

/*NOTEPAD VARIABLES */
let notePad = document.getElementById("notepad-span");
let notePadBox = document.getElementById("notepadapp");

/*EMAIL VARIABLES*/
let emailIcon = document.getElementById("emailicon");
let email = document.getElementById("emailbox");

/* MINIMIZE BUTTON */
let minimize = document.querySelector(".minimize");

/*EXIT-BUTTON VARIABLES */
let emailExitButton = document.getElementById("email-exitbutton");
let photosExitButton = document.getElementById("photos-exitbutton");
let playerExitButton = document.getElementById("player-exitbutton");
let notePadExit = document.getElementById("notepad-exitbutton");
let bioExitButton = document.getElementById("bio-exitbutton");
let ticTacExitButton = document.getElementById("tictac-exitbutton")

/* DROPDOWN FILES */
let AccesoriesSpan = document.getElementById("accesories-span");
let AccesoriesDrop = document.getElementById("accesories");

/* EMAIL BOX */
const emailDrag = document.getElementById("emailbox");
let offsetX, offsetY;
/* END OF VARIABLES */

/* DRAG FUNCTIONALITIES */

/* DRAG FUNCTION*/
/*EMAIL */
const move = (e) => {
  emailDrag.style.left = `${e.clientX - offsetX}px`;
  emailDrag.style.top = `${e.clientY - offsetY}px`;
};

/*on mouse down this event listener captures the mouse location  */
emailDrag.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - emailDrag.offsetLeft;
  offsetY = e.clientY - emailDrag.offsetTop;
  /*after the mouse location is located the container will move with the mouse, creating effect of drag */
  document.addEventListener("mousemove", move);
});

/*remove event listener on mouse up for Emailbox*/
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});

/*DRAG FUNCTION */
/*MP3 PLAYER */
const move2 = (e) => {
  Player.style.left = `${e.clientX - offsetX}px`;
  Player.style.top = `${e.clientY - offsetY}px`;
};

Player.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - Player.offsetLeft;
  offsetY = e.clientY - Player.offsetTop;
  document.addEventListener("mousemove", move2);
});

/*remove event listener on mouse up for the mp3 Player */
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move2);
});

/* DRAG FUNCTION*/
/*NOTEPAD */
const move3 = (e) => {
  notePadBox.style.left = `${e.clientX - offsetX}px`;
  notePadBox.style.top = `${e.clientY - offsetY}px`;
};

notePadBox.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - notePadBox.offsetLeft;
  offsetY = e.clientY - notePadBox.offsetTop;
  document.addEventListener("mousemove", move3);
});

/*remove event listener on mouse up for the notepad container Player */
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move3);
});


/*DRAG FUNCTION*/
/*PHOTOS */
const move4 = (e) => {
  photos.style.left = `${e.clientX - offsetX}px`;
  photos.style.top = `${e.clientY - offsetY}px`;
};

photos.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - photos.offsetLeft;
  offsetY = e.clientY - photos.offsetTop;
  document.addEventListener("mousemove", move4);
});

/*remove event listener on mouse up for the notepad container Player */
document.addEventListener("mouseup", ()=> {
  document.removeEventListener("mousemove", move4)
})

/*END OF DRAG FUNCTIONALITIES */

/*EVENTS */

/* START-BUTTON EVENT */
startButton.addEventListener("mousedown", function () {
  toggleElementVisibility(dropDown);
  longPress(startButton);
});

/* ICONS EVENTS */
iconDiv.addEventListener("click", function () {
  toggleElementVisibility(taskBarIcon);
});

musicIcon.addEventListener("click", function () {
  incrementIndexOnClick(Player);
  toggleElementVisibility(Player);
});

emailIcon.addEventListener("click", function () {
  toggleElementVisibility(email);
  incrementIndexOnClick(email);
  longPress(taskBarEmail);
});

speakerIcon.addEventListener("click", () =>
  toggleElementVisibility(volumeRange)
);

/* EXIT BUTTON EVENTS */
playerExitButton.addEventListener("click", function () {
  hideElementVisibility(Player);
  visualizerStop();
  pauseRadio();
});

emailExitButton.addEventListener("click", function () {
  hideElementVisibility(email);
  hideElementVisibility(taskBarIcon);
});

notePadExit.addEventListener("click", () => hideElementVisibility(notePadBox));
photosExitButton.addEventListener("click", () => hideElementVisibility(photos));
ticTacExitButton.addEventListener("click", () => hideElementVisibility(ticTacContainer));

/*EVENT TO HIDE VOLUME AND DROPDOWN */
main.addEventListener("click", () => {
  hideElementVisibility(volumeRange);
  hideElementVisibility(AccesoriesDrop,dropDown);
  longPressRemove(startButton);
});

/*DARKMODE BUTTON EVENT */
darkMode.addEventListener("click", () => {
darkModeToggle(darkModeContainers);
longPress(darkMode);
});

/* VOLUME EVENT*/

volumeRange.addEventListener("input", () => {
  var volume = parseFloat(volumeRange.value) / 100;
  radioPlayer.volume = volume;
});

/* RADIO BUTTON EVENTS */
playButton.addEventListener("mousedown", () => {
  playRadio();
  visualizerStart();
  longPress(playButton);
  longPressRemove(pauseButton,stopButton);
  startTimer('minutes','seconds','miliseconds');
})

pauseButton.addEventListener("mousedown", ()=>{
  pauseRadio();
  visualizerStop();
  longPress(pauseButton);
  longPressRemove(playButton,stopButton);
  stopTimer();
})

stopButton.addEventListener("mousedown", () => {
  pauseRadio();
  visualizerStop();
  longPress(stopButton);
  longPressRemove(playButton,pauseButton);
});

/* DROPDOWN SPAN EVENTS */
AccesoriesSpan.addEventListener("click", () => {
  toggleElementVisibility(AccesoriesDrop);
  incrementIndexOnClick(AccesoriesDrop);
});

photoSpan.addEventListener("click", () => {
  toggleElementVisibility(photos);
  hideElementVisibility(dropDown,AccesoriesDrop);
  incrementIndexOnClick(photos);
  longPressRemove(startButton);
});

notePad.addEventListener("click", () => {
  toggleElementVisibility(notePadBox);
  hideElementVisibility(dropDown,AccesoriesDrop);
  incrementIndexOnClick(notePadBox);
  longPressRemove(startButton);
});

bioSpan.addEventListener("click", () => {
  toggleElementVisibility(bio);
  hideElementVisibility(dropDown,AccesoriesDrop);
  incrementIndexOnClick(bio);
  longPressRemove(startButton);
});

ticTacSpan.addEventListener("click", () =>{
  toggleElementVisibility(ticTacContainer);
  hideElementVisibility(dropDown,AccesoriesDrop);
});

/* TASKBAR TABS EVENTS */
taskBarIcon.addEventListener("mousedown", () => {
  longPress(taskBarIcon);
});