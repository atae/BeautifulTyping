
let songfiles = {
  result: `assets/music/Shogun_Beatz.mp3`,
  gameNormal: 'assets/music/Beautiful_Typing.mp3'
  // title: `assets/music/Vatic_Sketch_1.mp3`
}

let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

export const level5 = {
  level: '5 - ',
  currentText: ["","end"],
  prelevelText: [""],
  nextLevel: 'level6',
  animations: {
    shake: true,
    spotlight: false,
    flags: false,
    cats: false,
    random: false
  }
}
