
let songfiles = {
  result: `assets/music/Shogun_Beatz.mp3`,
  gameNormal: 'assets/music/Beautiful_Typing.mp3'
  // title: `assets/music/Vatic_Sketch_1.mp3`
}

let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

export const level1 = {
  level: '1 - The Intro',
  currentText: ["Welcome!", "If you're looking for someone", "with a charming smile,", "and mad coding chops",
  "you should give Andrew Tae","a chance to interview!","Either way,", "please sit back and enjoy", "the hardest typing test you have ever seen.",
  "Have fun and good luck!", "end"],
  prelevelText: ["Welcome to Beautiful Typing! Let's get you warmed up for the tasks ahead."],
  currentLevel: 'level1',
  nextLevel: 'level2',
  animations: {
    shake: false,
    spotlight: false,
    flags: false,
    cats: false,
    random: false
  }
}
