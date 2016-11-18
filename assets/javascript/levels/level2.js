
let songfiles = {
  result: `assets/music/Shogun_Beatz.mp3`,
  gameNormal: 'assets/music/Beautiful_Typing.mp3'
  // title: `assets/music/Vatic_Sketch_1.mp3`
}

let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

export const level2 = {
  level: '2 - The Coffee',
  currentText: ["Scrum meeting at 7PM. Don't be late!",
  "The security guards called again. You can't keep parking in the spaces reserved for the charity winners. Please move your car now.",
  "Coffee machine is down again. Looks like we'll have to go get some coffee from across the- Oh, I see you've already got your own cup. Carry on.",
   "Where is my stapler? Where IS my stapler? WHERE is my stapler? Where is my STAPLER?", "SYNERGY!!!","!!11!1i!iil!1l1l1l1","end"],
  prelevelText: ["This level will simulate an environment wherein you have consumed 5 more cups of coffee than usual. This will test perseverance."],
  nextLevel: 'level3',
  animations: {
    shake: true,
    spotlight: false,
    flags: false,
    cats: false,
    random: false
  }
}
