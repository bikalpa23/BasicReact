import React from 'react'
const Button = (props) => {
  const{title,body}=props  
  return (
    <>
    <h1>{title}</h1>
    <h1>{body}</h1>
    </>
  )
}

export default Button