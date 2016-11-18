import {level1} from './level1'
import {level2} from './level2'
import {level3} from './level3'
import {level4} from './level4'
import {level5} from './level5'
import {level6} from './level6'
import {testLevel} from './testLvl'
import {longTestLvl} from './longTestLvl'

export const getLevel = (levelName, soundOption) => {
  let levels = {
    level1: level1,
    level2: level2,
    level3: level3,
    level4: level4,
    level5: level5,
    level6: level6,
    testLevel: testLevel,
    longTestLvl: longTestLvl
  }
  let songfiles = {
    result: `assets/music/Shogun_Beatz.mp3`,
    gameNormal: 'assets/music/Beautiful_Typing.mp3'
    // title: `assets/music/Vatic_Sketch_1.mp3`
  }

  let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
  //order is Error, Type, Complete

  // debugger
  return {
    // soundFiles: songfiles['gameNormal'],
  level: levels[levelName]['level'],
  currentText: levels[levelName]['currentText'],
  preLevelText: levels[levelName]['prelevelText'],
  nextLevel: levels[levelName]['nextLevel'],
  animations: levels[levelName]['animations'],
  soundFiles: [songfiles['gameNormal'], songfiles['result']],
  sfx: soundEffects,
  options: {
    muteSoundOption: soundOption['muteSoundOption'],
    muteMusicOption: soundOption['muteMusicOption']
  }
  }
  console.log(levels[levelName]);
}

export const getNextLevel = (levelName, soundOption) => {
  if (typeof levels[levelName] == 'undefined'){
    return {level: "End of the Game"}
  }
}
