/* eslint-disable no-unused-vars */
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')

var timer = {
  seconds: 0,
  id: null,
}

function start() {
  timer.id = setInterval(function () {
    timer.seconds++
    render()
    console.log('counting...')
  }, 1000)
}

function render() {
  $time.textContent = timer.seconds
}

$start.addEventListener('click', start)
