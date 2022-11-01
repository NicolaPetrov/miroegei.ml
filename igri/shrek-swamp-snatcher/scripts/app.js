document.addEventListener('DOMContentLoaded',() => {
  
  // STORED VARIABLES

  const grid = document.querySelector('.grid')
  const width = 10
  const height = 10
  const cells = []
  let frogIndex = 95
  const startButton = document.querySelector('#start')
  const riverCells = document.querySelectorAll('.river')
  const gridSection = document.querySelector('.grid-parent')
  const losingScreen = document.querySelector('.losing-screen')
  const winningText = document.querySelector('.winning-text')
  const resetButton = document.querySelector('#reset')
  const savedChars = document.querySelector('.saved-chars')
  const fiona = document.querySelector('.fiona')
  const puss = document.querySelector('.puss')
  const donkey = document.querySelector('.donkey')
  const scoreBoard = document.querySelector('.score')
  const secondSection = document.querySelector('.second-section')
  const gameOverReset = document.querySelector('.game-over-reset')
  const shrekLogo = document.querySelector('.logo')
  const homepage = document.querySelector('.shrek-homepage')



  // AUDIO CLIPS STORED IN VARIABLES

  const donkeySound = new Audio('audio_clips/wow.mp3')
  const fionaSound = new Audio('audio_clips/kind.mp3')
  const LordF = new Audio('audio_clips/ginger.mp3')
  const pussSound = new Audio('audio_clips/annoying.mp3')
  const startButtonSound = new Audio('audio_clips/tunnel.mp3') 
  const startButtonSound2 = new Audio('audio_clips/what-are-you-doing-in-my-swamp-1.mp3')
  const bonusPointsSound = new Audio('audio_clips/Coin-pick-up-sound-effect.mp3')
  const doubleJump = new Audio('audio_clips/Boing-sound-effect.mp3')
  const gameOver = new Audio('audio_clips/itsallogrenow1.mp3')
  


  // HIDING THINGS TO REAPPEAR ON EVENT LISTENERS

  winningText.classList.add('hide')
  fiona.classList.add('hide')
  puss.classList.add('hide')
  donkey.classList.add('hide')


  // ANIMATION FOR SHREK LOGO

  shrekLogo.addEventListener('mouseover', e => {
    shrekLogo.classList.add('animated')
    shrekLogo.classList.add('flip')

  })


  // LOADING THE GRID

  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('data-id', i)
  
    grid.appendChild(cell)
    cells.push(cell)
    cell.classList.add('.div')
  }

  

  // STYLING THE GRID

  cells.forEach(function (cell, index) {
    if (index >= 40 && index <= 59 || index >= 0 && index <= 9 || index >= 90 && index <= 99) {
      cell.classList.add('safety')
    } if (index === 3) {
      cell.classList.add('puss')
    } if (index === 5) {
      cell.classList.add('donkey')
    } if (index === 7) {
      cell.classList.add('fiona')
    } if (index >= 15 && index <= 17 || index >= 23 && index <= 26 || index >= 23 && index <= 26 || index >= 31 && index <= 33 || index === 37 || index === 38 ) {
      cell.classList.add('log')
    } if (index >= 10 && index <= 14 || index >= 18 && index <= 22 || index >= 27 && index <= 30 || index >= 34 && index <= 36 || index === 39) {
      cell.classList.add('river')
    } if (index >= 60 && index <= 89) {
      cell.classList.add('swamp')
    } if (index >= 80 && index <= 89 && index % 2 === 0) {
      cell.classList.add('fairyG')
    } if (index >= 60 && index <= 69 && index % 2 === 1) {
      cell.classList.add('car')
    } if (index === 44) {
      cell.classList.add('gingerbread')
    } if (index === 52 || index === 47) {
      cell.classList.add('baby')
    } if (index === 74) {
      cell.classList.add('pig')
    } if (index === 95) {
      cell.classList.add('player')
    }
  })  


  // EVENT LISTENER FOR THE START BUTTON

  startButton.addEventListener('click', () => {

    startButtonSound2.play()

    
    // TIMER
  
    function startTimer(duration, display) {
      var timer = duration, minutes, seconds
      setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        display.textContent = minutes + ':' + seconds

        if (--timer < 0) {
          timer = duration
        }
      }, 1000)
    }

    var oneMinute = 60 * 1,
      display = document.querySelector('.timer')
    startTimer(oneMinute, display)


    // Set interval to get LORD F AND FAIRY G to move
    function carMovement() {

      setInterval(() => {
        const fairyCells = document.querySelectorAll('.fairyG')
        fairyCells.forEach(fairyCell => {
          fairyCell.classList.remove('fairyG')
          fairyCell.classList.add('swamp')
          let fairyCellIndex = parseFloat(fairyCell.getAttribute('data-id'))
          if (fairyCellIndex === 80) {
            fairyCellIndex = fairyCellIndex + width - 1
          } else {
            fairyCellIndex -= 1
          }
          fairyCell = cells[fairyCellIndex]
          fairyCell.classList.add('fairyG')
          if (fairyCell.classList.contains('player')) {
            console.log('it is a fairy G sq')
            fairyCell.classList.replace('fairyG', 'skull-and-crossbones')
            cells[frogIndex].classList.remove('player')
            cells[frogIndex] = 95
            setTimeout(function(){
              grid.classList.add('hide')
              secondSection.classList.add('hide')
            }, 900)
    
            setTimeout(function(){
              losingScreen.classList.replace('hide', 'losing-text')
              losingScreen.appendChild(playAgain)
            }, 1000)

          }

        })
      }, 1000)


      setInterval(() => {
        const carCells = document.querySelectorAll('.car')
        carCells.forEach(carCell => {
          carCell.classList.remove('car')
          carCell.classList.add('swamp')
          let carCellIndex = parseFloat(carCell.getAttribute('data-id'))
          if (carCellIndex === 69 || carCellIndex === 89) {
            carCellIndex = carCellIndex - width + 1
          } else {
            carCellIndex += 1
          }
          carCell = cells[carCellIndex]
          carCell.classList.add('car')
          if (carCell.classList.contains('player')) {
            carCell.classList.replace('car', 'skull-and-crossbones')
            cells[frogIndex].classList.remove('player')
            cells[frogIndex] = 95
            setTimeout(function(){
              grid.classList.add('hide')
              secondSection.classList.add('hide')
            }, 900)
    
            setTimeout(function(){
              losingScreen.classList.replace('hide', 'losing-text')
            }, 1000)
          }
        })
      }, 500)
    }

    carMovement()


    // Set Interval to get LOGS TO MOVE

    function logMovement() {
      setInterval(() => {
        const logCells = document.querySelectorAll('.log')
        logCells.forEach(logCell => logCell.classList.remove('log'))
        logCells.forEach(logCell => {
          //OLD LOG POSITION
          logCell.classList.add('river')
          let logCellIndex = parseInt(logCell.getAttribute('data-id'))
          let isFrogOnLog = false

          if (frogIndex === logCellIndex) {
            isFrogOnLog = true
            logCell.classList.remove('player')
          }
          // UPDATES LOG POSITION
          if (logCellIndex === 10 || logCellIndex === 20 || logCellIndex === 30) {
            logCellIndex = logCellIndex + width - 1
          } else {
            logCellIndex -= 1
          }

          logCell = cells[logCellIndex]

          if (isFrogOnLog) {
            frogIndex = logCellIndex
            logCell.classList.add('player')
          }
          logCell.classList.add('log')

        })

      }, 800)

    }

    logMovement()

  })


  // KEY UP EVENT LISTENER

  document.addEventListener('keyup', (e) => {
    
    // when the key is lifted up, remove the avatar from that grid
    cells[frogIndex].classList.remove('player') 
    // x = 
    const x = frogIndex % width
    
    // 0,1,2,3,4 = index, divide these by width = 10 you get x coordinates of 0,0.1,0.2,0.3,0.4 - round these to integers
    const y = Math.floor(frogIndex / width)
    
    
    
    //  if key code is 37,38,39,40 (Left, Up, Right, Down)
    switch (e.keyCode) {
      case 37: if (x > 0) frogIndex -= 1
      // if the fog gets to left hand side of grid (x axis bigger than 0) get the frog to go back one
        break
      case 38: if (y > 0) frogIndex -= width
      // if the frog gets to the top frog index - 10 (e.g. at y of 30 )
        break
      case 39: if (x < width - 1) frogIndex += 1
      // if x is smaller than 9 move one to the right
        break
      case 40: if (y < width - 1)frogIndex += width
      // if y is smaller than 9, 
        break
      case 32: if (y > 0) frogIndex -= width * 2
        doubleJump.play()

    }
    // when the key is pressed add the avatar to that grid
    cells[frogIndex].classList.add('player')



    // FUNCTIONS FOR SAVING CHARACTERS
    
    // DONKEY SAVED
    function donkeySaved() {
      if (cells[frogIndex].classList.contains('donkey')) {
        cells[frogIndex].classList.remove('player')
        cells[frogIndex].classList.replace('donkey', 'trophy')
        donkeySound.play()
        frogIndex = 95
        setTimeout(function () {
          donkey.classList.replace('hide', 'donkey')
        }, 800)
      }
    }
    // FIONA SAVED 
    function fionaSaved() {
      if (cells[frogIndex].classList.contains('fiona')) {
        cells[frogIndex].classList.remove('player')
        cells[frogIndex].classList.replace('fiona', 'trophy')
        fionaSound.play()
        frogIndex = 95
        setTimeout(function () {
          fiona.classList.replace('hide', 'fiona')
        }, 800)
      }
    }
    // PUSS IN BOOTS SAVED 
    function pussSaved() {
      if (cells[frogIndex].classList.contains('puss')) {
        cells[frogIndex].classList.remove('player')
        cells[frogIndex].classList.replace('puss', 'trophy')
        pussSound.play()
        frogIndex = 95
        setTimeout(function () {
          puss.classList.replace('hide', 'puss')
        }, 800)
      }
    }


    // BONUS POINTS
    let score = 0
    function bonusPoints(score) {
      
      
      if (cells[frogIndex].classList.contains('gingerbread')) {
        bonusPointsSound.play()
        LordF.play()
        cells[frogIndex].classList.remove('gingerbread')
        setTimeout(function () {
          scoreBoard.innerHTML = '50 BONUS POINTS'
        }, 500)
        setTimeout(function () {
          scoreBoard.innerHTML = score + 50
        }, 2000)
        console.log(score)
        score = score + 50
        console.log(score)

        
      } else if (cells[frogIndex].classList.contains('baby')) {
        console.log('success')
        bonusPointsSound.play()
        cells[frogIndex].classList.remove('baby')
        setTimeout(function () {
          scoreBoard.innerHTML = '100 BONUS POINTS'
        }, 500)
        setTimeout(function () {
          scoreBoard.innerHTML = score + 100
        }, 2000)
        score = score + 100
        console.log(score)

      } else if (cells[frogIndex].classList.contains('pig')) {
        console.log('success')
        bonusPointsSound.play()
        cells[frogIndex].classList.remove('pig')
        setTimeout(function () {
          scoreBoard.innerHTML = '20 BONUS POINTS'
        }, 500)
        setTimeout(function () {
          scoreBoard.innerHTML = score + 20
        }, 2000)
        score = score + 20
        console.log(score)
      }

    }

    bonusPoints(score)


    // CHECKING IF DROWNED FUNCTION

    function frogDrowned(frogIndex){
      if (cells[frogIndex].classList.contains('log')) {
        console.log('You are on a log')
      } else if (cells[frogIndex].classList.contains('river')) {
        console.log('you drowned!')
        cells[frogIndex].classList.replace('river', 'skull-and-crossbones')
        gameOver.play()
        cells[frogIndex].classList.remove('player')

        setTimeout(function () {
          grid.classList.add('hide')
          secondSection.classList.add('hide')
        }, 900)

        setTimeout(function () {
          losingScreen.classList.replace('hide', 'losing-text')
        }, 1000)
      }
    } 
      

       
    // CHECKING IF RUN OVER FUNCTION

    function frogRunOver(frogIndex) {
    
      if (cells[frogIndex].classList.contains('fairyG') || cells[frogIndex].classList.contains('car') ) {
        console.log('You have been run over!', cells[frogIndex])
        gameOver.play()
        cells[frogIndex].classList.replace('fairyG', 'skull-and-crossbones')
        cells[frogIndex].classList.replace('car', 'skull-and-crossbones')
        cells[frogIndex].classList.remove('player')
        cells[frogIndex] = 95
        setTimeout(function(){
          grid.classList.add('hide')
          secondSection.classList.add('hide')
        }, 900)

        setTimeout(function(){
          losingScreen.classList.replace('hide', 'losing-text')
        }, 1000)

      }

    }

    // WINNING CONDITION FUNCTION

    function winningCondition() {
      if (cells[3].classList.contains('trophy') && cells[5].classList.contains('trophy') && cells[7].classList.contains('trophy')) {
        console.log('you won')
        setTimeout(function () {
          grid.classList.add('hide')
        }, 900)

        setTimeout(function () {
          winningText.classList.replace('hide', 'winning-text')
        }, 1000)
      } 
    }

    // RESET BUTTON 
    resetButton.addEventListener('click', () => {
      location.reload(1)
    } )

    gameOverReset.addEventListener('click', () => {
      location.reload(1)
    } )
    
    // PLAY GAME FUNCTION 

    frogDrowned(frogIndex)
    frogRunOver(frogIndex)
    fionaSaved()
    donkeySaved()
    pussSaved()
    winningCondition()
  })
}) 