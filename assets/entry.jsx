import anime from "animejs"
import {handleStart, startLevel, handleKeyboard} from './javascript/game';
import animation from './javascript/animation';
import {getLevel} from './javascript/levels/levelRequire';
import titleScreen from './javascript/title/titleScreen'

// import {getLevel}from './javascript/level_handler';

document.addEventListener("DOMContentLoaded", () => {
  titleScreen();
  //ToggleSound
  let options = {
    muteSoundOption: true,
    muteMusicOption: false
  }
  //get level Name
  let currentLevel = getLevel('level1', options)
  let nextLevel;
  let gameStarted = false;

  const Start = (e) => {
    // debugger
    if (e.key == "1" && gameStarted === false) {
      document.removeEventListener('keydown', Start)
      gameStarted = true;
    // nextLevel = getLevel('longTestLvl');
    startLevel(currentLevel);
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
