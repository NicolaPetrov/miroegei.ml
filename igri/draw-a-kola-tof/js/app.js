document.addEventListener('DOMContentLoaded', () => {
  const width = 10
  const grid = document.querySelector('.grid')
  const cells = []
  let playerIdx = 0


  // Every time you click you get the avatar
  function handleClick(e) {
    e.target.classList.add('player')
  }

  // so width = 10. If i is smaller than 5 (10 / 2) create an div called cell
  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('DIV')

    // when you click on one of the grid cells, carry out handleClick funtion which get the avatar to appear
    cell.addEventListener('click', handleClick)

    // make cells child of grid and add cells to the grid
    grid.appendChild(cell)
    cells.push(cell)
  }

  // cell with index of 0, add the classlist of 'player' from CSS
  cells[playerIdx].classList.add('player')

  
  document.addEventListener('keyup', (e) => {

    // when the key is lifted up, remove the avatar from that grid
    cells[playerIdx].classList.remove('player') 
    // x = 
    const x = playerIdx % width
    // 0,1,2,3,4 = index, divide these by width = 10 you get x coordinates of 0,0.1,0.2,0.3,0.4 - round these to integers
    const y = Math.floor(playerIdx / width)
    
    //  if key code is 37,38,39,40 (Left, Up, Right, Down)
    switch (e.keyCode) {
      case 37: if (x > 0) playerIdx -= 1
        break
      case 38: if (y > 0) playerIdx -= width
        break
      case 39: if (x < width - 1) playerIdx += 1
        break
      case 40: if (y < width - 1)playerIdx += width
        break
    }

    // when the key is pressed add the avatar to that grid
    cells[playerIdx].classList.add('player')
  })
})
