
const breakpoints = {
  p400: 400,
  p500: 500,
  p580: 580,
  p650: 650,
  p750: 750,
  p900: 900,
  p1000: 1000,
  p1200: 1200,
  p1250: 1250,
  p1360: 1360,
  p1440: 1450,
}

const maxWidth = 1440
const movingDuration = '.3s'

export {
  breakpoints,
  maxWidth,
  movingDuration,
}

let isTouch = false

if ('ontouchstart' in document.documentElement) {
  let isTouch = true
}
