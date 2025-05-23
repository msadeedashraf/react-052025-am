import React from 'react'

const Footer = () => {
const currentYear = new Date();

  return (
    <div>
      <footer>Copy right {currentYear.getFullYear()}</footer>
    </div>
  )
}

export default Footer
