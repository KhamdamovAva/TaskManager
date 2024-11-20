
import React from 'react'

function Button({ children, className, type = "button" }) {
  return (
    <button className={className} type={type}>{children}</button>
  )
}

export default Button
