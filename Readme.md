#Beautiful Typing
Link to live version
[Live Link]
[Live Link]: https://atae.github.io/BeautifulTyping/beauTyping.html

Beautiful Typing is a series of arcade-style typing challenges that will test the users ability to type in different situations.

##Instructions
  This game requires a keyboard to play. Start the Game or choose a level and type the words as quickly and accurately as possible. The

##Technologies and Technical Features
This project uses the following technologies:
- Vanilla JavaScript and `jquery` for handling game logic
- `Anime.js` with `HTML5 Canvas` for modern animations and visual feedback
- `Howler.js` for handling sound
- Webpack for creating a single point of entry for HTML script declaration
- Leaderboard implemented with dreamlo.com

### Level Selection
  The game loop handles one level at a time, but since I needed multiple levels, I created a level selection method that utilizes JSON objects.

  In my `levelRequire.js`, I handle all of the requests for levels by comparing the text argument and returning the corresponding JSON object

  ![tag screenshot](docs/Screenshots/Level Handler.png)

  Each level object has every variable needed to change the game, including booleans to indicate which animations to use.

  ![tag screenshot](docs/Screenshots/Example Level State.png)



##To-dos/future features
  In future versions, I will be implementing the following features:
    - More leaderboard interaction
    - Additional Level ideas implemented with specific animations
    - Power Ups Mode that lets you simplify words, slow down time, skip a few errors, raise score multiplier Guitar Hero styled
        - This would be like getting star power where you have to spell a particular word flawlessly in order to get a power up.
    - Implement a back end to allow a custom level maker
