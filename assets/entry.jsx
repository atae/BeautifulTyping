import anime from "animejs"
import {startLevel, handleKeyboard} from './javascript/game';

document.addEventListener("DOMContentLoaded", () => {
  let currentLevel = {
    level: "Tutorial",
    currentText: ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"],
    soundFiles: './assets/music/Beautiful_Typing.mp3',
    sfx: ['./assets/sounds/Blip_Select.wav']
  }

  //ToggleSound
  let textToType = ["Let's get this typed.", "Let's also get this typed"]
  document.addEventListener("keydown", (e) => {
    if (e.key == "1") {
    startLevel(currentLevel);

    }
  })





});

//Soundtrack
// Results Page: Shogun Beatz
