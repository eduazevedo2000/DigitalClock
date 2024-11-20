const lisbon = document.getElementById('lisbon')
const newYork = document.getElementById('newYork')
const sydney = document.getElementById('sydney')
const lisbonButton = document.getElementById('lisbonButton')
const newYorkButton = document.getElementById('newYorkButton')
const sydneyButton = document.getElementById('sydneyButton')

function digitalClock() {
  const now = new Date()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const hoursLisbon = String(hours).padStart(2, '0')
  const hoursNewYork = String((hours - 4 + 24) % 24).padStart(2, '0')
  const hoursSydney = String((hours + 11) % 24).padStart(2, '0')

  const formattedTimeLisbon = `${hoursLisbon}:${minutes}:${seconds}`
  const formattedTimeNewYork = `${hoursNewYork}:${minutes}:${seconds}`
  const formattedTimeSydney = `${hoursSydney}:${minutes}:${seconds}`

  lisbon.innerHTML = formattedTimeLisbon
  newYork.innerHTML = formattedTimeNewYork
  sydney.innerHTML = formattedTimeSydney

  lisbonButton.addEventListener('click', function () {
    lisbon.style.display = 'block'
    newYork.style.display = 'none'
    sydney.style.display = 'none'
  })
  newYorkButton.addEventListener('click', function () {
    lisbon.style.display = 'none'
    newYork.style.display = 'block'
    sydney.style.display = 'none'
  })
  sydneyButton.addEventListener('click', function () {
    lisbon.style.display = 'none'
    newYork.style.display = 'none'
    sydney.style.display = 'block'
  })
}

setInterval(digitalClock, 1)
