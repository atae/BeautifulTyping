import {getLevel} from '../levels/levelRequire';
import {handleStart, startLevel, handleKeyboard} from '../game';
import Howler from 'howler'
const titleScreen = () => {

  let titleMusic = new Howler.Howl({
    src:['./assets/music/Vatic_Sketch_1.mp3']
  }
  )

  titleMusic.play();

  // $('.dreamloLBTable').addClass('removed');

  let options = {
    muteSoundOption: false,
    muteMusicOption: false
  }
  $('.LevelSelect').prepend('<ul class="LevelSelect"><li id="start"> Start Game </li><li class="level">Level Select</li><li class="leaderboards">Leaderboards</li></ul>')
  $('.level').on('click', ()=>{
    $('.levelList').toggleClass("removed")
  })
  $('.level1').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`level1`, options))})
  $('.level2').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`level2`, options))})
  $('.level3').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`level3`, options))})
  $('.level4').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`level4`, options))})
  $('.level5').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`level5`, options))})
  $('.level6').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`level6`, options))})
  $('.leaderboards').on('click', e=> {
    $('.dreamloLBTable').toggleClass('removed');

  })
}

// $('#start').on('click', startGame())


//insert handlers for levelList

export default titleScreen;
