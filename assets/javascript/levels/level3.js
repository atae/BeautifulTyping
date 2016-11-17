
let songfiles = {
  result: `assets/music/Shogun_Beatz.mp3`,
  gameNormal: 'assets/music/Beautiful_Typing.mp3'
  // title: `assets/music/Vatic_Sketch_1.mp3`
}

let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

export const level3 = {
  level: '3 - The Scientist',
  currentText: ["In this study, I visualized connexin36-immunoreactive gap junctions and examined the structural features of the interconnected dendrites arising from parvalbumin (PV)-positive interneurons in layer 4 of the feline visual cortex.",
  "These viruses make sfRNAs by co-opting a cellular exoribonuclease using structured RNAs called xrRNAs.", "end"],
  prelevelText: ["Welcome to Beautiful Typing! Let's get you warmed up for the tasks ahead."],
  currentLevel: 'level3',
  nextLevel: 'testLevel',
  animations: {
    shake: false,
    spotlight: false,
    flags: false,
    cats: false,
    random: false
  }
}
