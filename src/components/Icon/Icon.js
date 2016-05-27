import React, { PropTypes } from 'react'
import classes from './Icon.scss'

export default function Icon ({
  ...props,
  src,
  color = '',
  width = 16,
  height = 16,
  className = '',
}) {
  const fillCode = color ? `fill="${color}"` : ''
  const styleCode = `style="width: ${width}px; height: ${height}px"`
  const __html = src.replace(/<svg/, `<svg ${fillCode} ${styleCode}`)

  return (
    <i
      {...props}
      className={`${classes.root} ${className}`}
      dangerouslySetInnerHTML={{ __html }}
    />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
}
