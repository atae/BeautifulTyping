import anime from "animejs"
import {handleStart, startLevel, handleKeyboard} from './javascript/game';
import animation from './javascript/animation';

document.addEventListener("DOMContentLoaded", () => {
  let currentLvl = {
    level: "Tutorial",
    currentText: ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"],
    soundFiles: './assets/music/Beautiful_Typing.mp3',
    sfx: ['./assets/sounds/Blip_Select.wav','./assets/sounds/typewriter.wav'],
    options: {
      muteSoundOption: false,
      muteMusicOption: false
    },
    animations: {
      shake: true,
      spotlight: false,
      flags: false,
      cats: false,
      random: false
    }
  }
  let gameStarted = false;
  //ToggleSound
  let textToType = ["Let's get this typed.", "Let's also get this typed"]
  const Start = (e) => {
    // debugger
    if (e.key == "1" && gameStarted === false) {
      document.removeEventListener('keydown', Start)
      gameStarted = true;
    startLevel(currentLvl);
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
