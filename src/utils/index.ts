// get last element of a path that looks like this: /some/url/with-some-title-alias15235
export function getAliasFromUrl(pathname) {
  return pathname.split('/').reverse()[0].split('-').reverse()[0]
}

export function childrenToString(children): string {
  if (typeof children === 'string') {
    return children
  }

  return children
    .map((el) => {
      if (typeof el === 'string') {
        return el
      } else {
        return childrenToString(el.props.children)
      }
    })
    .join('')
}
