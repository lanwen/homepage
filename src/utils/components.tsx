import * as React from 'react' // tslint:disable-line
import {pick} from 'lodash'

export function excludeProps(SubComponent: any, filter: string[] = []) {
  return (props) => {
    const keys = Object.keys(props).filter(key => filter.indexOf(key) === -1)
    const picked = pick(props, keys)

    return <SubComponent {...picked} />
  }
}
