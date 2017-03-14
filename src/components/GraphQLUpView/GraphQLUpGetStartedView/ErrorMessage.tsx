import * as React from 'react'
import { $v, Icon } from 'graphcool-styles'

interface State {

}

interface Props {

}

export default class ErrorMessage extends React.Component<Props, State> {

  render() {

    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgRed10, .br2, .bSolid, .bw1, .bRed30, .red, .pv10, .ph12, .f14, .mb38, .flex;
          }
        `}</style>
        <Icon
          className='mr10'
          width={20}
          height={20}
          color={$v.red}
          src={require('../../../assets/icons/errorSign.svg')}
        />
        {this.props.children}
      </div>
    )
  }
}
