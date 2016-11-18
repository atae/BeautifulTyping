import anime from "animejs"
import {handleStart, startLevel, handleKeyboard} from './javascript/game';
import animation from './javascript/animation';
import {getLevel} from './javascript/levels/levelRequire';
import titleScreen from './javascript/title/titleScreen'

// import {getLevel}from './javascript/level_handler';

document.addEventListener("DOMContentLoaded", () => {
  titleScreen();
  //ToggleSound
  // debugger
  let options = {
    muteSoundOption: false,
    muteMusicOption: false
  }
  //get level Name


  const Start = (e) => {
    // debugger
    // if (e.key == "1" && gameStarted === false) {
    //   document.removeEventListener('keydown', Start)
    //   gameStarted = true;
    // // nextLevel = getLevel('longTestLvl');
    // startLevel(currentLevel);
    // }
  }



  // $('.soundOption').on('click', () => {
  //   if ($('.soundOption').text() === " Sound: Off ") {
  //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: On </li>')
  // }
  // })


  document.addEventListener("keydown", Start)

  animation();


});







//Soundtrack
// Results Page: Shogun Beatz
