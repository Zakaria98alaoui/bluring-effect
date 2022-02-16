/*
[1] : set count variable for loading
[2] : create bluring function
[3] : setinterval to runing bluring function
[4] : clearing interval when count is big than 99%
[5] : decrease opacity for loading element from 1 to 0
[6] : decrease blur() filter from 30px to 0 for bg element
*/
let Loading = document.querySelector('.loading')
const BG = document.querySelector('.bg')
let count = 0

let bluringEffect = () => {
  count++
  Loading.innerHTML = `${count}%`
  if (count > 99) {
    clearInterval(interval)
  }
  Loading.style.opacity = `${scale(count, 0, 100, 1, 0)}`
  BG.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
}
let interval = setInterval(bluringEffect, 15)

// Javascript / jQuery - map a range of numbers to another range of numbers
//stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
https: function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
