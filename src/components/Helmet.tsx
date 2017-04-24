import * as React from 'react'
import {Helmet} from 'react-helmet'

export default function HelmetComponent(props) {
  if (!graphcool_initialized) {
    return null
  }
  return (
    <div>
      <Helmet {...props} />
    </div>
  )
}
