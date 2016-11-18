
let songfiles = {
  result: `assets/music/Shogun_Beatz.mp3`,
  gameNormal: 'assets/music/Beautiful_Typing.mp3'
  // title: `assets/music/Vatic_Sketch_1.mp3`
}

let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

export const level6 = {
    level: 'Level 6 - The End',
    currentText: ["","end"],
    prelevelText: ["Welcome to Beautiful Typing! Let's get you warmed up for the tasks ahead."],
    nextLevel: 'end',
    animations: {
      shake: true,
      spotlight: true,
      flags: false,
      cats: false,
      random: false
    }
}
