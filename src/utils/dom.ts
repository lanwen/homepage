export function isElementInViewport (el: Element): boolean {
  const {top,left,bottom,right } = el.getBoundingClientRect()
  const windowWidth = window.innerWidth || document.documentElement.clientWidth
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  const visibleVertically = (top >= 0 && top <= windowHeight)
    || (bottom >= 0 && bottom <= windowHeight)
    || (top < 0 && bottom > windowHeight)
  const visibleHorizontally = (left >= 0 && left <= windowWidth)
    || (right >= 0 && right <= windowWidth)
    || (left < 0 && right > windowWidth)

  return visibleVertically && visibleHorizontally
}
