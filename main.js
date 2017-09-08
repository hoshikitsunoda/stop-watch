/* eslint-disable no-unused-vars */

var timer = {
  seconds: 0,
  id: null
}

function start() {
  timer.id = setInterval(function () {
    timer.seconds++
  }, 1000)
}

function stop() {
  clearInterval(timer.id)
}

function render() {
  setInterval(function() {
    console.log('here')
    $seconds = document.querySelector('#seconds')
    $seconds.textContent = timer.seconds
  }, 1000)
}

var $start = document.querySelector('#start')
$start.addEventListener('click', start)

var $stop = document.querySelector('#stop')
$stop.addEventListener('click', stop)

render()
