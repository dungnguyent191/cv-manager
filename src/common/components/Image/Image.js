import * as React from 'react'

export const Image = (props) => {
  const { src, alt } = props
  return <img src={src} alt={alt} />
}