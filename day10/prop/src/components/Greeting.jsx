import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <h2>Welcome <span class="greeting-name"> {props.user}</span> </h2>
    </div>
  )
}

export default Greeting
