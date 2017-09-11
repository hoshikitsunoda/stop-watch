/* eslint-disable no-unused-vars */
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $reset = document.querySelector('#reset')
var $limit = document.querySelector('#limit')
var $set = document.querySelector('#set')

var timer = {
  seconds: 0,
  id: null,
  limit: null
}

function start() {
  if (timer.id === null) {
    timer.id = setInterval(function () {
      if (timer.limit === null) {
      timer.seconds++
    } else if (timer.seconds < timer.limit) {
      timer.seconds++
    }
    }, 1000)
  }
}

function stop() {
  clearInterval(timer.id)
  timer.id = null
}

function render() {
  setInterval(function() {
    $time.textContent = timer.seconds
  }, 1000)
}

function reset() {
  timer.seconds = 0
  $time.textContent = timer.seconds
}

function limit() {
  timer.limit = $limit.value
}

$start.addEventListener('click', start)
$stop.addEventListener('click', stop)
$reset.addEventListener('click', reset)
$set.addEventListener('click', limit)

render()
