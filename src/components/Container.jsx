import React from 'react'

export const Container = ({children, className, style}) => {
  return (
<div className={`w-[1190px] mx-auto ${className}`} style= {style} > {children}</div>
  )
}
