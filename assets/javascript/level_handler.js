

const LevelHandler = () => {

  let songfiles = {
    result: `assets/music/Shogun_Beatz.mp3`,
    gameNormal: 'assets/music/Beautiful_Typing.mp3'
    // title: `assets/music/Vatic_Sketch_1.mp3`
  }


  let soundEffects = [`assets/sounds/Blip_Select.wav`, `assets/sounds/typewriter.wav`, `assets/sounds/Pickup_Coin10.wav`]
    //order is Error, Type, Complete

  let levels = {
    testLevel: {
      level: "Tutorial",
      currentText: ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"],
      prelevelText: ["testing testing 1 2 3"],
      soundFiles: songfiles[gameNormal],
      sfx: soundEffects,
      options: {
        muteSoundOption: false,
        muteMusicOption: false
      },
      animations: {
        shake: false,
        spotlight: true,
        flags: false,
        cats: false,
        random: false
      }
    },

    longTestLvl: {
      level: "Even Longer Text Holy SHit",
      currentText: ["Alright, let's get some super long words into this application. What other words can we use I wonder?",
       "Time to paste a whoooole paragraph in here. I don't know how to type the Lorem thing but it's fine, there are plenty of other words in the actual english language that I can use instead. So take THAT international policy!",
        "THREEEEEEEEEEEKJSKJHASNKJASJHGDASLCNLIHWQIUDGQWLENQWKLGKDYJASHV>GSLFDH>Z<", "end"],
      prelevelText: ["Suuuuuuuper long testing What's up every body it's time for some loooooooong typing I hope everyone was able to make it here okay. Press 1 now to being the game!"],
      soundFiles: songfiles[gameNormal],
      sfx: soundEffects,
      options: {
        muteSoundOption: false,
        muteMusicOption: false
      },
      animations: {
        shake: false,
        spotlight: true,
        flags: false,
        cats: false,
        random: false
      }
    },

    1: {
      level: "1: The Intro",
      currentText: [],
      prelevelText: [],
      soundFiles: songfiles[gameNormal],
      sfx: soundEffects,
      options: {},
      animations: {}
    }

  }
  }

  const getLevel = (level) => {
    return levels[level]
  }


export default LevelHandler
