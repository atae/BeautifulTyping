import Howler from 'howler'
import animation from './animation';
import {getLevel} from './levels/levelRequire';
import titleScreen from './title/titleScreen'

// implement new Date once I figure it out

//Implement current score to pass amongst levels
  // export const startLevel = (currentLvl) => {
  //
  // }
export const startLevel = (currentLvl) => {

  const startGame = (currentLvl) => {
    // debugger
    // console.log(animation);
    // $('.navbar').toggleClass('hidden')

    $('.text').append('<h2><span class="done"></span><span class="currentText"></span>')
    let currentLevel = JSON.parse(JSON.stringify(currentLvl));
    let currentText = currentLevel['currentText']
    document.removeEventListener('keydown',(e) => { handleKeyboard(e)})
    clearInterval(gameWatcher);
    let score = 0;
    let keys_entered = 0;
    let wpm = 0;
    let averageWpm = 0;
    let averageWpmCounter = 0;
    let time = 0;
    let maxWpm = 0;
    let errors = 0;
    let done = ""
    let combo = 0;
    let maxCombo = 0;
    $(`.results`).addClass("removed")
    // $(`.stageNavigation`).addClass('removed')
    $('.currentText').replaceWith(`<span class="currentText" ><u>${currentText[0][0]}</u>${currentText[0].slice(1)}</span>`)
    $('.done').replaceWith(`<span class="done">${done}</span>`)
    $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
    $('.Level').replaceWith(`<li class="Level"> Level: ${currentLevel['level']} </li>`)
    $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
    $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm </li>`)
    $('.maxWpm').replaceWith(`<li class="maxWpm">Max WPM: ${maxWpm} wpm</li>`)
    $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
    $('.score').replaceWith(`<li class="score">Score: ${score}</li>`)
    $(`.errors`).replaceWith(`<li class="errors"> Errors: ${errors}</li>`)

    //Setup sounds

      let soundFiles = currentLevel['soundFiles']
      let playMusic = new Howler.Howl({
        src: soundFiles[0],
        loop: true,
        html5: true,
        mute: currentLevel['options']['muteMusicOption']
      });
      let playResult = new Howler.Howl({
        src: soundFiles[1],
        loop: true,
        html5: true,
        mute: currentLevel['options']['muteMusicOption']
      })

      let sfx = currentLevel['sfx']
      let errorSound = new Howler.Howl({
        src: [sfx[0]],
        volume: 0.4,
        mute: currentLevel['options']['muteSoundOption']

      });

      let typeSound = new Howler.Howl({
        src: [sfx[1]],
        volume: 1,
        mute: currentLevel['options']['muteSoundOption']
      })

      let dingSound = new Howler.Howl({
        src: [sfx[2]],
        volume: 1,
        mute: currentLevel['options']['muteSoundOption']
      })

    //Setup Level Gimmicks here
    let className = "currentText"
    let toggleAnimation = (element) => {
      if (currentLevel["animations"]["shake"] === true) {
        element.toggleClass("shake")
        $('.done').toggleClass('shake')
      }

      if (currentLevel["animations"]["spotlight"]){
        var ctx = $('#c')[0].getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 75, 10, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
      }
    }

    let retryStage = (currentLevel) => {
      startLevel(currentLevel)
    }
    //setup Stats Bar
    let gameWatcher = setInterval(() => {
      time++;
    wpm = parseInt((keys_entered/5)/(time/60))
    averageWpm = parseInt((averageWpm + wpm) / 2)
    if (wpm > maxWpm) {
      maxWpm = wpm
    }
      $('.Level').replaceWith(`<li class="Level"> Level: ${currentLevel['level']} </li>`)
      $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
      $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm </li>`)
      $('.maxWpm').replaceWith(`<li class="maxWpm">Max WPM: ${maxWpm} wpm</li>`)
      $('.averageWpm').replaceWith(`<li class="averageWpm"> Average WPM: ${averageWpm} wpm</li`)
      $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
      $('.score').replaceWith(`<li class="score">Score: ${score}</li>`)
      $(`.errors`).replaceWith(`<li class="errors"> Errors: ${errors}</li>`)

    },
     1000)




    playMusic.play();


     toggleAnimation($('.currentText'))

    document.addEventListener('keydown', (e) => {
      let previousSpace = false
      if (currentText.length > 1) {
        if (e.key === currentText[0][0]){
          // debugger
          typeSound.play();
          if (currentText[0][0] == " "){
            done += "\u00A0"
          } else {
            done += currentText[0][0]
          }
          currentText[0] = currentText[0].slice(1)
          keys_entered++
          if ( previousSpace === true){
            $('.done').replaceWith(`<span class="done" >${done}\u0020</span>`)
            previousSpace = false
          } else {
          $('.done').replaceWith(`<span class="done">${done}</span>`)
          }
          combo++;
          score += (100 * (parseInt((combo/10))+ 1)) + parseInt(wpm*0.5)
          $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
          $('.score').replaceWith(`<li class="score">Score: ${score}</li>`)
          if (currentText[0][0] == " "){
            $('.currentText').replaceWith(`<span class="currentText" ><u>\u00A0</u>${currentText[0].slice(1)}</span>`)
            toggleAnimation($('.currentText'))
            previousSpace = true
            //Come back to this space glitch later
          }
          else {
            $('.currentText').replaceWith(`<span class="currentText" ><u>${currentText[0][0]}</u>${currentText[0].slice(1)}</span>`)
            toggleAnimation($('.currentText'))
          }
        } else if(e.key !== "Shift" && e.key!== "Enter"){
          errors ++
          errorSound.play();
          combo = 0
          $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
          $(`.errors`).replaceWith(`<li class="errors"> Errors: ${errors}</li>`)
        }
          if (currentText[0] == "" && currentText[1] == "end") {
            dingSound.play();
            playMusic.stop();
            currentText = currentText.slice(1)
            clearInterval(gameWatcher);
            done = ""
            $('.done').replaceWith(`<span class="done">${done}</span>`)
            $(`.currentText`).replaceWith(`<span class="done"></span>`)
            playResult.play();
            //replace this line with results screen in the future
            document.removeEventListener('keydown',(e) => { handleKeyboard(e)})
            $(`.results`).removeClass("removed")
            $(`.retryStage`).one('click', () => {
              playResult.stop()
              $(`.nextStage`).off('click');
              $(`.returnToTitle`).off('click');
              startLevel(currentLvl)
            })

            $(`.nextStage`).one('click', () => {
              playResult.stop()
              $(`.results`).addClass("removed")
              $(`.retryStage`).off('click');
              $(`.returnToTitle`).off('click');
              startLevel(getLevel(currentLevel['nextLevel'],currentLevel['options']
            ))})

            $(`.nextStage`).one('keypress', (e) => {
              debugger
              if (e.key==="Enter"){
              playResult.stop()
              $(`.retryStage`).off('click');
              $(`.returnToTitle`).off('click');
              startLevel(getLevel(currentLevel['nextLevel'],currentLevel['options']
            ))}})

              $('.returnToTitle').one('click', () => {
                // document.reload();
                playResult.stop();
                $(`.results`).addClass("removed")
                $(`.retryStage`).off('click');
                $(`.nextStage`).off('click');
                titleScreen();
              })
            // $(`.stageNavigation`).toggleClass('removed')
          } else if (currentText[0].length === 0) {
            currentText = currentText.slice(1)
            done = ""
            dingSound.play();
            // changeBackground();
            score += 250 * (parseInt((combo/10)) + 1) + parseInt(wpm + 1)
            $('.done').replaceWith(`<span class="done">${done}</span>`)
            $('.currentText').replaceWith(`<span class="currentText" ><u>${currentText[0][0]}</u>${currentText[0].slice(1)}</span>`)
            toggleAnimation($('.currentText'))

          }

      } else if (currentText[0] == "end"){

      }
          // $('.keys-entered').replaceWith(`<li class="keys-entered">Correct Keys Entered: ${keys_entered} </li>`)
})

}
$('.title').addClass("removed")
$('.done').remove();
$('.currentText').remove();

if (currentLvl['preLevelText']) {
  $('.preLevelText').removeClass('removed')
  $(`.preLevelText`).replaceWith(`<div class = "preLevelText">
    <h2 class="preLevelTextText"></h2>
    <br/>
    <br/>
    <h2 class="preLevelTextButton"> Click Here To Begin </h2>
   </div>`)
  $('.preLevelTextText').replaceWith(`<h3 class="preLevelTextText">${currentLvl['preLevelText']}</h3>`)
} else {
  $('.preLevelTextText').replaceWith(`<h2 class="preLevelTextText">No Text Yet.</h2>`)
}
  $('.preLevelTextButton').one('click', (e) => {
  //3
  $('.preLevelText').replaceWith('<div class="preLevelText"><h3>3</h3></div>')
  //2
   setTimeout( () => {$('.preLevelText').replaceWith('<div class="preLevelText"><h3>2</h3></div>')},1000)
  //1
   setTimeout( () => {$('.preLevelText').replaceWith('<div class="preLevelText"><h3>1</h3></div>')},2000)
  // GO
  setTimeout( () => {$('.preLevelText').replaceWith('<div class="preLevelText"><h3>Go!</h3></div>')},3000)
  // actual Go
  setTimeout( () => {
    $(`.preLevelText`).addClass('removed')
    startGame(currentLvl)
  },4000)

})
}
