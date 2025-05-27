import React from 'react'

const Footer = () => {
  const myDate = new Date;
  return (
  <footer>
    <p>Copyright &copy; {myDate.getFullYear()}</p>
  </footer>
  )
}

export default Footer
