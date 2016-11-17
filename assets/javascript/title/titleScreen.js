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
  $('.LevelSelect').prepend('<ul class="LevelSelect"><li id="start"> Start Game </li><li class="level">Level Select</li><li id="leaderboards">Leaderboards</li></ul>')
  $('#start').on('click', ()=>{
    titleMusic.stop()
    startLevel(getLevel(`level1`, options))})

  $('.level').on('click', ()=>{
    $('.levelList').toggleClass("removed")
  })
  $('.test').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`testLevel`, options))})
  $('.longTest').on('click', e => {
    titleMusic.stop()
    startLevel(getLevel(`longTestLvl`, options))})
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
  // $('.leaderboards').on('click', e=> {
  //   $('.dreamloLBTable').toggleClass('removed');
  //
  // })

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("leaderboards");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }



}



// $('#start').on('click', startGame())


//insert handlers for levelList

export default titleScreen;
