import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'

interface Props {
  src: string
  color: string
  category: string
  backgroundColor: string
}

const SeeAll = styled.div`
  @media (max-width: ${breakpoints.p1360}px) {
    padding-right: ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p750}px) {
    padding-right: 0;
  }
`

const Basis = styled.div`
   @media (max-width: ${breakpoints.p750}px) {
    flex-direction: column; 
  }
`

export default class TutorialsContent2 extends React.Component<Props, {}> {
  render() {

    const CircleTutorial = styled.div`
      width: ${$v.size38};
      height: ${$v.size38};
      background-color: ${this.props.backgroundColor}
`
    return (
      <Basis className={cx($p.flex, $p.itemsCenter, $p.justifyBetween)}>
        <div className={cx($p.flex, $p.itemsCenter)}>
          <CircleTutorial className={cx($p.flex, $p.justifyCenter, $p.itemsCenter, $p.br100)}
          >
            <Icon
              src={this.props.src}
              width={50}
              height={50}
              fill={true}
              color={this.props.color}
            />
          </CircleTutorial>
          <div className={cx($p.black30, $p.f25, $p.fw4, $p.pa10)}>{this.props.category}</div>
        </div>
        <SeeAll className={cx($p.green, $p.f20, $p.pr38)}>See all</SeeAll>
      </Basis>
    )
  }
}
