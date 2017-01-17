import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import {Link} from 'react-router'
import {breakpoints} from '../../../../utils/constants'

interface Props {
  twinAlias: string
  targetSimple: boolean
}

const SimpleRelayTwin = ({twinAlias, targetSimple}: Props) => {

  const right = window.innerWidth < breakpoints.p500 ? -20 : -33

  const twin = targetSimple ? 'Simple' : 'Relay'
  return (
    <div
      className={cx(
        $p.bgLightgreen20,
        $p.pa16,
        $p.f14,
        $p.green,
        window.innerWidth > breakpoints.p500 && $p.ml38,
        $p.bbox,
        $p.relative,
      )}
      style={{
        width: 194,
        flex: '0 0 194px',
        top: -66,
        right: right,
      }}
    >
      <div>There's a corresponding Article for the {twin} API</div>
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
    </div>
  )
}

export default SimpleRelayTwin
