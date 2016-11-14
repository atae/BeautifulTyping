import anime from "animejs"

document.addEventListener("DOMContentLoaded", () => {
  let keys_entered = 0;
  let wpm;
  let time = 1;
  setInterval(() => {
    time++,
    wpm = parseInt((keys_entered/5)/(time/60))
    $('.Timer').replaceWith(`<li class="Timer">Time: ${time} seconds`)
    $('.wpm').replaceWith(`<li class="wpm">WPM: ${wpm} wpm</li>`)
  }, 1000)

  let handleKeyboard = (e) => {
      keys_entered++
      $('.keys-entered').replaceWith(`<li class="keys-entered"> Keys Entered: ${keys_entered} </li>`)
  }

  document.addEventListener('keydown', (e) => { handleKeyboard(e)})

  });
