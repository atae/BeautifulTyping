import {getLevel} from '../levels/levelRequire';
import {handleStart, startLevel, handleKeyboard} from '../game';

const titleScreen = () => {
  let options = {
    muteSoundOption: false,
    muteMusicOption: false
  }
  $('.LevelSelect').prepend('<ul class="LevelSelect"><li id="start"> Start Game </li><li class="level">Level Select</li></ul>')
  $('.level').on('click', ()=>{
    $('.levelList').toggleClass("removed")
  })
  $('.level1').on('click', e => {startLevel(getLevel(`level1`, options))})
  $('.level2').on('click', e => {startLevel(getLevel(`level2`, options))})
  $('.level3').on('click', e => {startLevel(getLevel(`level3`, options))})
  $('.level4').on('click', e => {startLevel(getLevel(`level4`, options))})
  $('.level5').on('click', e => {startLevel(getLevel(`level5`, options))})
  $('.level6').on('click', e => {startLevel(getLevel(`level6`, options))})

}

// $('#start').on('click', startGame())


//insert handlers for levelList

export default titleScreen;
