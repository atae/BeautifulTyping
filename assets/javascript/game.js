

// implement new Date once I figure it out
  export const startLevel = (currentLevel) => {
    console.log(currentLevel);
    let keys_entered = 0;
    let wpm;
    let time = 0;
    let maxWpm = 0;
    let errors = 0;
    $('.currentText').replaceWith(`<h2 class="currentText">${currentLevel[0]}</h2>`)

    let gameWatcher = setInterval(() => {
      time++;
    wpm = parseInt((keys_entered/5)/(time/60))

    if (wpm > maxWpm) {
      maxWpm = wpm
    }
      $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
      $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm </li>`)
      $('.maxWpm').replaceWith(`<li class="maxWpm">Max WPM: ${maxWpm} wpm</li>`)
    },
     1000)

     let done = ""
    document.addEventListener('keydown', (e) => {
      if (currentLevel.length > 1) {
        if (e.key === currentLevel[0][0]){
          // debugger
          done += currentLevel[0][0]
          currentLevel[0] = currentLevel[0].slice(1)
          console.log(currentLevel);
          keys_entered++
          $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
          $('.currentText').replaceWith(`<h2 class="currentText">${currentLevel[0]}</h2>`)

        } else if(e.key !== "Shift"){
          errors ++
          $(`.errors`).replaceWith(`<li class="errors"> Errors: ${errors}</li>`)
        }
          if (currentLevel[0] == "" && currentLevel[1] == "end") {
            currentLevel = currentLevel.slice(1)
            clearInterval(gameWatcher);
            done = ""
            $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
            $(`.currentText`).replaceWith(`<h2> That's it! </h2>`)
            //replace this line with results screen in the future
            document.removeEventListener('keydown',(e) => { handleKeyboard(e)})
          } else if (currentLevel[0].length === 0) {
            currentLevel = currentLevel.slice(1)
            done = ""
            $('.done').replaceWith(`<h3 class="done">${done}</h3>`)
            $('.currentText').replaceWith(`<h2 class="currentText">${currentLevel[0]}</h2>`)
          }

      } else if (currentLevel[0] == "end"){

      }
          // $('.keys-entered').replaceWith(`<li class="keys-entered">Correct Keys Entered: ${keys_entered} </li>`)
})







  }
  //
  // export const handleKeyboard =
  // }
