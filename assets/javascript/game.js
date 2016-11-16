import Howler from 'howler'
import animation from './animation';
// implement new Date once I figure it out




  export const startLevel = (currentLvl) => {
    // debugger
    // console.log(animation);
    let currentLevel = JSON.parse(JSON.stringify(currentLvl));
    let currentText = currentLevel['currentText']
    document.removeEventListener('keydown',(e) => { handleKeyboard(e)})
    clearInterval(gameWatcher);
    // changeBackground();
    let score = 0;
    console.log(currentText);
    let keys_entered = 0;
    let wpm = 0;
    let time = 0;
    let maxWpm = 0;
    let errors = 0;
    let done = ""
    let combo = 0;
    let maxCombo = 0;
    $('.currentText').replaceWith(`<h2 class="currentText">${currentText[0]}</h2>`)
    $('.done').replaceWith(`<h3 class="done">${done}</h3>`)

    document.addEventListener("keydown", animation.handleEvent)
    // (e) => {
    //   // debugger
    // if ($('.currentText').text().length <= 2){
    //   document.addEventListener("keydown", animation.handleEvent);
    //     // handleEvent;
    // } else {
    //   document.removeEventListener("keydown", animation.handleEvent);
    // }
    // })
    // Setup Sound Here
    let soundFiles = currentLevel['soundFiles']
    let playMusic = new Howler.Howl({
      src: [soundFiles],
      loop: true,
      html5: true,
      mute: currentLevel['options']['muteMusicOption']
    });

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


    playMusic.play();
    $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
    $('.Level').replaceWith(`<li class="Level"> Level: ${currentLevel['level']} </li>`)
    $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
    $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm </li>`)
    $('.maxWpm').replaceWith(`<li class="maxWpm">Max WPM: ${maxWpm} wpm</li>`)

    let gameWatcher = setInterval(() => {
      time++;
    wpm = parseInt((keys_entered/5)/(time/60))

    if (wpm > maxWpm) {
      maxWpm = wpm
    }
      $('.Level').replaceWith(`<li class="Level"> Level: ${currentLevel['level']} </li>`)
      $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
      $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm </li>`)
      $('.maxWpm').replaceWith(`<li class="maxWpm">Max WPM: ${maxWpm} wpm</li>`)

    },
     1000)
     $('.navbar').toggleClass('hidden')
     toggleAnimation($('.currentText'))
    document.addEventListener('keydown', (e) => {

      if (currentText.length > 1) {
        if (e.key === currentText[0][0]){
          // debugger
          typeSound.play();
          done += currentText[0][0]
          currentText[0] = currentText[0].slice(1)
          console.log(currentText);
          keys_entered++
          $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
          combo++;
          score += (100 * (parseInt((combo/10))+ 1)) + parseInt(wpm*0.5)
          $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
          $('.score').replaceWith(`<li class="score">Score: ${score}</li>`)
          if (currentText[0][0] == " " || done[done.length-1] == " "){
            $('.currentText').replaceWith(`<h2 class="currentText" >\u00A0${currentText[0]}</h2>`)
            toggleAnimation($('.currentText'))
            //Come back to this space glitch later
          } else {
            $('.currentText').replaceWith(`<h2 class="currentText" >${currentText[0]}</h2>`)
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
            $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
            $(`.currentText`).replaceWith(`<h2> That's it! </h2>`)
            //replace this line with results screen in the future
            document.removeEventListener('keydown',(e) => { handleKeyboard(e)})
          } else if (currentText[0].length === 0) {
            currentText = currentText.slice(1)
            done = ""
            dingSound.play();
            // changeBackground();
            score += 250 * (parseInt((combo/10)) + 1) + parseInt(wpm + 1)
            $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
            $('.currentText').replaceWith(`<h2 class="currentText">${currentText[0]}</h2>`)
            toggleAnimation($('.currentText'))

          }

      } else if (currentText[0] == "end"){

      }
          // $('.keys-entered').replaceWith(`<li class="keys-entered">Correct Keys Entered: ${keys_entered} </li>`)
})

}
