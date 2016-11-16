import * as React from 'react'
import * as cx from 'classnames'
import { $p, Icon } from 'graphcool-styles'

export default class Navbar extends React.Component<{}, {}> {

    render() {
        return (
            <div className={cx($p.w100, $p.bgGreen, $p.pa25)}>
                YO
            </div>
        )
    }
}

// {<Icon src={require('../../assets/icons/backup.svg')} width={50} height={50}/>}
