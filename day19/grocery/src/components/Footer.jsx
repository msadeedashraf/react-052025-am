import React from 'react'

const Footer = ({len}) => {
  
  return (
  <footer>
    <p> {len}  { len<=1 ? "item" : "items"  } in the list </p>
  </footer>
  )
}

export default Footer
