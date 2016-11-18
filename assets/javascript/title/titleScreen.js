import {getLevel} from '../levels/levelRequire';
import {handleStart, startLevel, handleKeyboard} from '../game';
import Howler from 'howler'
import animation from '../animation';
const resetPage = () => {
    $('.Level').replaceWith(`<li class = "Level"> Beautiful Typing </li>`)
    $('.score').replaceWith(`<li class = "score hidden"> Score: 0</li>`)
    $('.Timer').replaceWith(`<li class = "Timer hidden"> Time: 0 sec</li>`)
    $('.wpm').replaceWith(`<li class = "wpm hidden"> WPM: 0 wpm</li>`)
    $('.maxWpm').replaceWith(`<li class = "maxWpm hidden"> Max WPM: 0 wpm</li>`)
    $('.errors').replaceWith(`<li class ="errors hidden"> Errors: 0 </li>`)
    $('.titleName').replaceWith(`<h2 class="titleName animated bounceInDown"> Beautiful Typing </h2>`)
    $('.combo').replaceWith('<li class = "combo hidden"> Combo: 0 </li>')

    // $(`.LevelSelect`).replaceWith(`<ul class="LevelSelect animated bounceInLeft">
    //     </ul>
    //
    //     <div id="myModal" class="modal">
    //
    //         </div>
    //
    //   </div>
    //     <br/>`)
}


const titleScreen = () => {
  resetPage()
  $('.text').remove(`.title`)
  $('.title').removeClass('removed')

  $('.levelList').addClass("removed")

  let titleMusic = new Howler.Howl({
    src:['./assets/music/Vatic_Sketch_1.mp3'],
    loop: true
  })
  // if ($('.soundOption')===" Sound: Off "){


  // titleMusic.play();
// debugger

  if ($(`.musicOption`).text()===" Music: Off "){
    // debugger
    // titleMusic.stop();
  } else {
    // titleMusic.play();
    // debugger
  }


  // // $('.dreamloLBTable').addClass('removed');
  //
  $('.toTitle').addClass("hidden")
  animation();

  $('.soundOption').on('click', (e) => {
    // debugger
    // e.stopPropagation();
    let currentText = $('.soundOption').text()
    let newText = (currentText === " Sound: Off ")? " Sound: On " : " Sound: Off "
    if (newText === " Sound: Off ") {
      // debugger
      options['muteSoundOption'] = true
      options['muteMusicOption'] = true
      // titleMusic.mute(true)
    } else {
      // debugger
      options['muteSoundOption'] = false
      options['muteMusicOption'] = false
      // titleMusic.mute(false)

      // Howler.unmute();
    }
    // }


    $('.soundOption').text(newText);
  //
  //   if ($('.soundOption').text() === " Sound: On ") {
  //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: Off </li>')
  // } else if ($('.soundOption').text() === " Sound: Off ") {
  //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: On </li>')
  // }
  })
  let options = {
    muteSoundOption: false,
    muteMusicOption: false
  }

  if ($('.LevelSelectList').length === 0){
  $('.LevelSelect').prepend('<ul class="LevelSelectList"><li id="start"> Start Game </li><li id="levels">Level Select</li><li id="leaderboards">Leaderboards</li></ul>')
  }
  $('#start').on('click', ()=>{
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')

    startLevel(getLevel(`level1`, options))})
  // if (!$('#levels').onClick){
  //   $('#levels').on('click', ()=>{
  //     $('.levelList').toggleClass("removed")
  //   })
  // }
  $('#levels').on('click', () => {
    $('.levelList').toggleClass("removed")
  })

  $('.test').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`testLevel`, options))})
  $('.longTest').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`longTestLvl`, options))})
  $('.level1').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`level1`, options))})
  $('.level2').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`level2`, options))})
  $('.level3').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`level3`, options))})
  $('.level4').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`level4`, options))})
  $('.level5').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
    startLevel(getLevel(`level5`, options))})
  $('.level6').on('click', e => {
    // titleMusic.stop()
    $(`#levels`).off('click')
    $(`.soundOption`).off('click')
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


  // $('.musicOption').on('click', (e) => {
  //   // e.stopPropagation();
  //
  //   let currentMusicText = $('.musicOption').text()
  //   let newMusicText = (currentMusicText === " Music: Off ")? " Music: On " : " Music: Off "
  //   if (newMusicText === " Music: Off ") {
  //
      titleMusic.mute(true);
  //     options['muteMusicOption'] = true
  //   } else {
      titleMusic.mute(false);
  //
  //     options['muteMusicOption'] = false
  //   }
  //   $('.musicOption').text(newMusicText);
  // })



}



// $('#start').on('click', startGame())


//insert handlers for levelList

export default titleScreen;
