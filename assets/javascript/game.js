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
    $('.currentText').replaceWith(`<span class="currentText" ><u>${currentText[0][0]}</u>${currentText[0].slice(1)}</span>`)
    $('.done').replaceWith(`<span class="done">${done}</span>`)
    $('.combo').replaceWith(`<li class="combo">Combo: ${combo}</li>`)
    $('.Level').replaceWith(`<li class="Level"> Level: ${currentLevel['level']} </li>`)
    $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
    $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm </li>`)
    $('.maxWpm').replaceWith(`<li class="maxWpm">Max WPM: ${maxWpm} wpm</li>`)

    //Setup sounds

      let soundFiles = currentLevel['soundFiles']
      let playMusic = new Howler.Howl({
        src: soundFiles[0],
        loop: true,
        html5: true,
        mute: currentLevel['options']['muteMusicOption']
      });
      console.log(soundFiles[1]);
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

    //setup Stats Bar
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




    playMusic.play();


     $('.navbar').toggleClass('hidden')
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
          console.log(currentText);
          keys_entered++
          console.log(done);
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
            $(`.currentText`).replaceWith(`<span> That's it! </span>`)
            playResult.play();
            //replace this line with results screen in the future
            document.removeEventListener('keydown',(e) => { handleKeyboard(e)})
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
