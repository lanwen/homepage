import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Root = styled.article`

  padding: ${$v.size60} ${$v.size38} 0;
  align-items: center;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .nestedImage {
      margin-right: 0;
      margin-left: ${$v.size38};
      
      @media (min-width: ${breakpoints.p750}px) {
        margin-left: ${$v.size60};
      }
    }  
    
    @media (max-width: ${breakpoints.p500}px) {
      margin-left: 0;
      margin-right: -25px;
      padding: ${$v.size60} 0 0 ${$v.size25};

      .nestedImage {
        margin-left: ${$v.size25};
      }
    }
  }
  
  @media (min-width: ${breakpoints.p750}px) {
    padding: ${$v.size60} ${$v.size96} 0;
  }
  
  @media (min-width: ${breakpoints.p580}px) {
    padding: ${$v.size60} ${$v.size60} 0;
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    align-items: flex-start;
    padding: ${$v.size60} ${$v.size25} 0 0;
    margin-left: -25px;
  }
`

const Copy = styled.p`
  margin-top: ${$v.size38};
  
`

const PreviewImage = styled.div`
  width: 230px;
  height: 230px;
  margin-right: ${$v.size38};
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.p750}px) {
    width: 300px;
    height: 300px;
    margin-right: ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    width: 170px;
    height: 170px;
    margin-right: ${$v.size25};
  }
`

interface Props {
  headline: string,
  copy: string,
}

export default class FeaturePreview extends React.Component<Props, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.ph96)}>
        <PreviewImage className={cx('nestedImage')}>
          <div className={cx($p.bgBlack07, $p.w100, $p.h100, $p.brPill)}></div>
        </PreviewImage>
        <div>
          <h3 className={cx($p.f25, $p.fw3)}>{this.props.headline}</h3>
          <Copy className={cx($p.black50)}>{this.props.copy}</Copy>
        </div>
      </Root>
    )
  }
}
