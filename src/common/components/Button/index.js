import React from 'react'

const PrimaryBtn = ({children, className = '', ...props}) => {
    return <button className={`${className} btn btn-primary`} {...props}>{children}</button>
}

export const Btn = {
  Primary : PrimaryBtn
}