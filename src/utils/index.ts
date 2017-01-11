// get last element of a path that looks like this: /some/url/with-some-title-alias15235
import {Color} from '../types/types'
export function getAliasFromUrl(pathname) {
  return pathname.split('/').reverse()[0].split('-').reverse()[0]
}

export function childrenToString(children): string {
  if (typeof children === 'string') {
    return children
  }

  if (typeof children === 'undefined') {
    return ''
  }

  return children
    .map((el) => {
      if (typeof el === 'string') {
        return el
      } else if (el.type === 'img') {
        return el.props.src
      } else {
        return childrenToString(el.props.children)
      }
    })
    .join('')
}

export function renderColor({r, g, b}: Color, opacity: number) {
  return `rgba(${r},${g},${b},${opacity})`
}
