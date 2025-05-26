import React from 'react'

const Content = () => {

 const fetchName = () => {
 const name = ["Done", "Anurag", "CJ", "Shalah", "Ruth"];
    const n = Math.floor(Math.random() * 5);
    return name[n];

};
  
  return (
   <main>
    <p>Hello {fetchName()}</p>

   </main>
  )
}

export default Content
