## Beautiful Typing

### Background
Beautiful Typing is a series of arcade-style typing challenges that will test the user's ability to type in different situations.
This will be accomplished with 3 basic goals in mind:

  1. Beautiful interactive aesthetics to keep the user immersed
  2. Competitive features to give the user a reason to play the game over and over
  3. Showcase ability to apply game mechanics

This game will measure Words Per Minute in a way that incorporates mistakes and will assign a medal corresponding to the range that the WPM range that the user falls under. There will be no persisted data aside from a 3rd-party API that hosts a leaderboard. As such, the user will need to complete all of the challenges at once in order to reach the leaderboards.


### Functionality & MVP  

Beautiful Typing will have the following features:

- [ ] Animations that respond to your keyboard typing (transitioned backgrounds every 30 characters)
- [ ] Main screen that dictates what the user should type next that will not proceed until the user gets the text correct.
- [ ] Different levels with different typings contexts such as shaking screens, numbers only, technical words, hidden lines, etc. Each level will have a different set of background colors to represent game progression.
- [ ] Combo system that awards more points the longer the player goes without a mistakes

In addition, this project will include:

- [ ] Short passages between levels detailing the rules for each level
- [ ] A settings page for volume, animation frequency, etc.
- [ ] A production Readme
- [ ] Multiple levels with different types of distractions/situations:
    - Normal level that warms the player up.
    - Slightly harder level that uses larger words that most people would not know. In addition, spotlights will show up on the screen that will hide parts of the typing prompt so that the user cannot see the whole sentence.
    - Type sentences in different languages. Incorporate flag colors for each sentence.
    - User will type random letters and symbols as though a cat has walked over their keyboard. Potential cat pictures.
    - Earthquake level where the screen is shaking, making the text hard to read.
    - Random combination of all of the above.

### Wireframes


The app will being with a title screen consisting of the leaderboards, a couple of options, and links for the Github, my LinkedIn, and Email.

![tag wireframe](docs/Title Page.png)

There will be modals between levels detailing the level details with a single button for confirmation.
![tag wireframe](docs/PreLevel Info.png)

The app will be a full screen app that has a top bar with game status and a main screen with the text that needs to be typed.
The main input screen is where most of the interactive elements will occur.
![tag wireframe](docs/Gameplay.png)

After each stage, there will be a results screen with details for their ranking, WPM, errors, etc.
![tag wireframe](docs/Results.png)




### Architecture and Technologies

This project will use the following technologies:

- Vanilla JavaScript and 'jquery' for handling game logic
- `Anime.js` with `HTML5 Canvas` for modern animations and visual feedback
- `Howler.js` will be used for handling sound
- Webpack
- Leaderboard implemented with dreamlo.com

'title.js' - this script will be in charge of getting settings from the user and implementing these settings throughout the application

'game.js' - Game statistics will be handled here including WPM, timer, scoring, and combo counting.

'animations.js' - Everything related to visuals and styling that need to be handled by `Anime.js` will be handled in this file.

'level_handler.js' - The content for each level will be in here. This will include color scheme arrays, text, level-specific rules, and music playback. Current, text will be stored directly into this file, but if necessary I will implement a parser for text files.



### Implementation Timeline

**Day 1**: Get a working simple typing game working. This will be a single level. It should receive user input at this point and will output results in real time. Sounds and music will be implemented at this time.

- Get a green bundle with webpack
- 'title.js' and 'game.js' should be working together to show a working typing application
- make sure leaderboards are working as expected.

**Day 2**: Learn `Anime.js` so that I can at least replicate what I want from their CodePen demoes. A lot of styling decisions will be made on this day. I will also begin designing levels and deciding how to handle text content.

- backgrounds should change depending on user settings
- animations will be close to polished and should act as expected
- game-related animations such as screen shaking and hiding text will be implemented
- the ability to reuse animations with different color palettes will be implemented
- A sufficient font
- Navigation between the 4 screens should be seamless


**Day 3**: Implement `level_handler.js` to house all level information. Level information should also be completed, including color schemes. There will be at least 5 levels by this point. All desired animations for each level should be decided and implemented.

- 5 levels completed and joined together
- Text for each level should be done or customizable
- Gameplay should feel good at this point

**Day 4**: Style the frontend, making it polished and professional.  

- Style the borders of the page so that the game looks good and focused.
- Bonus: Implement more level ideas.

### Bonus features

- [ ] Additional music
- [ ] Additional Level ideas implemented with specific animations. More level types include:
  - Backwards text level
  - Typing a business sales pitch while being distracted by imaginary coworkers and popup emails every few seconds
  - Typing a scientific paper while explosions go on in the background due to failed science experiments and nuclear meltdowns
  - Typing purely numbers as an accountant
  - Application will simulate computer lag and glitching while trying to type out programming code
  - Screen will switch between on and off every second so that the user can only see the text half of the time
  - Classroom Typing A-Z with screaming kids.
- [ ] Practice Mode so that the user can practice a specific level without worrying about scoreboards or having to finish the other levels to get to the level they want to playback
- [ ] Power Ups Mode that lets you simplify words, slow down time, skip a few errors, raise score multiplier Guitar Hero styled
    - This would be like getting star power where you have to spell a particular word flawlessly in order to get a power up. Activate with the mouse?
