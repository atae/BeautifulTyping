import anime from "animejs"
import {startLevel, handleKeyboard} from './javascript/game';

document.addEventListener("DOMContentLoaded", () => {
  let currentLevel = ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"]

  let textToType = ["Let's get this typed.", "Let's also get this typed"]
  document.addEventListener("keydown", (e) => {
    if (e.key == "1") {
    startLevel(currentLevel);
    }
  })





});

//Soundtrack
// Results Page: Shogun Beatz
