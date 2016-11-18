
let songfiles = {
  result: `assets/music/Shogun_Beatz.mp3`,
  gameNormal: 'assets/music/Beautiful_Typing.mp3'
  // title: `assets/music/Vatic_Sketch_1.mp3`
}

let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

export const level5 = {
  level: '5 - The Translator',
  currentText: ["Ada'tu tareeqi! Hal beemkanek mosaadati?",
  "Maraming maraming salamat po",
   "Nous sommes le jeudi 17 novembre 2016. Bienvenue dans notre programme hebdomadaire",
   "Shinpan wa kooto no katawara ni aru takai isu ni suwaru",
   "Kaftfahrzeug-Haftpflichtversicherung", "end"],
  prelevelText: ["You're a translator now! However, the stage light of the United Nations Council is constantly in your face. Try to type these foreign sentences accurately!"],
  nextLevel: 'level6',
  animations: {
    shake: false,
    spotlight: true,
    flags: false,
    cats: false,
    random: false
  }
}
