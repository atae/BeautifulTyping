import anime from "animejs"
import {handleStart, startLevel, handleKeyboard} from './javascript/game';
import animation from './javascript/animation';

document.addEventListener("DOMContentLoaded", () => {
  let currentLvl = {
    level: "Tutorial",
    currentText: ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"],
    soundFiles: './assets/music/Beautiful_Typing.mp3',
    sfx: ['./assets/sounds/Blip_Select.wav','./assets/sounds/typewriter.wav', './assets/sounds/Pickup_Coin10.wav'],
    options: {
      muteSoundOption: false,
      muteMusicOption: false
    },
    animations: {
      shake: false,
      spotlight: true,
      flags: false,
      cats: false,
      random: false
    }
  }

  let longLvl = {
    level: "Even Longer Text Holy SHit",
    currentText: ["Alright, let's get some super long words into this application. What other words can we use I wonder?",
     "Time to paste a whoooole paragraph in here. I don't know how to type the Lorem thing but it's fine, there are plenty of other words in the actual english language that I can use instead. So take THAT international policy!",
      "THREEEEEEEEEEEKJSKJHASNKJASJHGDASLCNLIHWQIUDGQWLENQWKLGKDYJASHV>GSLFDH>Z<", "end"],
    soundFiles: './assets/music/Beautiful_Typing.mp3',
    sfx: ['./assets/sounds/Blip_Select.wav','./assets/sounds/typewriter.wav', './assets/sounds/Pickup_Coin10.wav'],
    options: {
      muteSoundOption: false,
      muteMusicOption: false
    },
    animations: {
      shake: false,
      spotlight: true,
      flags: false,
      cats: false,
      random: false
    }
  }



  let gameStarted = false;
  //ToggleSound
  const Start = (e) => {
    // debugger
    if (e.key == "1" && gameStarted === false) {
      document.removeEventListener('keydown', Start)
      gameStarted = true;
    startLevel(longLvl);
    }
  }

  $('.soundOption').on('click', () => {
    if ($('.soundOption').text() === " Sound: On ") {
    $('.soundOption').replaceWith('<li class="soundOption"> Sound: Off </li>')
  } else if ($('.soundOption').text() === " Sound: Off ") {
    $('.soundOption').replaceWith('<li class="soundOption"> Sound: On </li>')
  }
  })


    $('.musicOption').on('click', () => {
      if ($('.musicOption').text() === " Music: On ") {
      $('.musicOption').replaceWith('<li class="musicOption"> Music: Off </li>')
    } else if ($('.musicOption').text() === " Music: Off ") {
      $('.musicOption').replaceWith('<li class="musicOption"> Music: On </li>')
    }
    })
  document.addEventListener("keydown", Start)

  animation();


});







//Soundtrack
// Results Page: Shogun Beatz
