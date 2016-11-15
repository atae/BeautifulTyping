import Howler from 'howler'

// implement new Date once I figure it out
  export const startLevel = (currentLevel) => {
    let currentText = currentLevel['currentText']

    console.log(currentText);
    let keys_entered = 0;
    let wpm;
    let time = 0;
    let maxWpm = 0;
    let errors = 0;
    let done = ""
    $('.currentText').replaceWith(`<h2 class="currentText">${currentText[0]}</h2>`)
    $('.done').replaceWith(`<h3 class="done">${done}</h3>`)

    let soundFiles = currentLevel['soundFiles']
    let playMusic = new Howler.Howl({
      src: [soundFiles]
    });

    let sfx = currentLevel['sfx']
    let sfx1 = new Howler.Howl({
      src: [sfx[0]],
      volume: 0.4
    });

    playMusic.play();
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

    document.addEventListener('keydown', (e) => {
      if (currentText.length > 1) {
        if (e.key === currentText[0][0]){
          // debugger
          done += currentText[0][0]
          currentText[0] = currentText[0].slice(1)
          console.log(currentText);
          keys_entered++
          $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
          if (currentText[0][0] == " " || done[done.length-1] == " "){
            $('.currentText').replaceWith(`<h2 class="currentText">\u00A0${currentText[0]}</h2>`)
            //Come back to this space glitch later
          } else {
            $('.currentText').replaceWith(`<h2 class="currentText">${currentText[0]}</h2>`)

          }
        } else if(e.key !== "Shift"){
          errors ++
          sfx1.play();
          $(`.errors`).replaceWith(`<li class="errors"> Errors: ${errors}</li>`)
        }
          if (currentText[0] == "" && currentText[1] == "end") {
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
            $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
            $('.currentText').replaceWith(`<h2 class="currentText">${currentText[0]}</h2>`)
          }

      } else if (currentText[0] == "end"){

      }
          // $('.keys-entered').replaceWith(`<li class="keys-entered">Correct Keys Entered: ${keys_entered} </li>`)
})






}

  export const playMusic= (currentLevel) => {

  }
  //
  // export const handleKeyboard =
  // }
