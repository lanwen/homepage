import * as React from 'react'
import * as cx from 'classnames'
import { $p, Icon } from 'graphcool-styles'
import Navbar from './Navbar'

export default class HomeView extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <Navbar />
        <Icon src={require('../../assets/icons/backup.svg')} width={50} height={50}/>
      </div>
    )
  }
}
