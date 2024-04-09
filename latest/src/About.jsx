import React, { useState } from 'react'

function About() {
  // const state = useState("Abcd")
  // const firstItem = state[0]
  // const secondItem = state[1]
  // var count = 0

  // const state = useState(0)
  // const firstItem = state[0]
  // const secondItem = state[1]

  const [number, setNumber] = useState(0)
  const increaseCount = () => {
    setNumber(number + 1)
  }
  const decreaseCount = () => {
    setNumber(number - 1)
  }

return (
  <div>
    <h1>{number}</h1>
    <button onClick={increaseCount}>+</button>
    <button onClick={decreaseCount}>-</button>
  </div>
)
}

export default About