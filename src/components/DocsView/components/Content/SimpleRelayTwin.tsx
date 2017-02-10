import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import {Link} from 'react-router'
import {breakpoints} from '../../../../utils/constants'
import styled from 'styled-components'

const Container = styled.div`
  @media (max-width: ${breakpoints.p750}px) {
    display: none;
  }
`

interface Props {
  twinAlias: string
  targetSimple: boolean
}

const SimpleRelayTwin = ({twinAlias, targetSimple}: Props) => {

  const twin = targetSimple ? 'Simple' : 'Relay'
  return (
    <Container
      className={cx(
        $p.absolute,
        $p.bgLightgreen20,
        $p.pa16,
        $p.f14,
        $p.green,
        window.innerWidth > breakpoints.p500 && $p.ml38,
        $p.bbox,
        $p.top0,
        $p.right0,
      )}
      style={{
        width: 194,
      }}
    >
      <div>
        There's a corresponding Article for the {twin} API
      </div>
      <Link
        className={cx(
          $p.buttonShadow, $p.bgWhite, $p.pv10, $p.ph16, $p.ttu, $p.relative, $p.mt16, $p.noUnderline, $p.fw6,
        )}
        style={{
          bottom: -20,
          letterSpacing: '0.53px',
        }}
        to={`-${twinAlias}`}
      >
        Go to {twin} API
      </Link>
    </Container>
  )
}

export default SimpleRelayTwin
