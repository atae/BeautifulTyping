import anime from "animejs"
import {handleStart, startLevel, handleKeyboard} from './javascript/game';
import animation from './javascript/animation';

document.addEventListener("DOMContentLoaded", () => {
  let currentLvl = {
    level: "Tutorial",
    currentText: ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"],
    soundFiles: './assets/music/Beautiful_Typing.mp3',
    sfx: ['./assets/sounds/Blip_Select.wav','./assets/sounds/typewriter.wav']
  }
  let gameStarted = false;
  //ToggleSound
  let textToType = ["Let's get this typed.", "Let's also get this typed"]
  const Start = (e) => {
    debugger
    if (e.key == "1" && gameStarted === false) {
      document.removeEventListener('keydown', Start)
      gameStarted = true;
    startLevel(currentLvl);
    }
  }

  document.addEventListener("keydown", Start)



 animation();
});







//Soundtrack
// Results Page: Shogun Beatz
