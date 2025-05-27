import React from 'react'
import {useState} from 'react'




const Content = () => {

  const [name, setName] = useState('CJ');

 const fetchName = () => {
 const name = ["Done", "Anurag", "CJ", "Shalah", "Ruth"];
    const n = Math.floor(Math.random() * 5);
    return name[n];

};


 const fetchName2 = () => {
 const name = ["Done", "Anurag", "CJ", "Shalah", "Ruth"];
    const n = Math.floor(Math.random() * 5);
    return setName(name[n]);

};



const myClickEvent = () => {

  console.log('I clicked this button')

}
  
const myClickEvent2 = (name) => {

  console.log(`${name} clicked this button`)

}

const myClickEvent3 = (e) => {
  
  e.target.innerText = "Good Job"

  console.log(e.target.innerText);
}



  return (
   <main>
    {<p onDoubleClick={myClickEvent} >Hello {fetchName()}</p> }

    <p onDoubleClick={myClickEvent}> Welcome {name}!</p>

    <button onClick={fetchName2}>Get Random Name</button>
    
    <button onClick={myClickEvent}>Click</button>
    
    <button onClick={() => {myClickEvent2('Anurag')}}>Click</button>

    <button onClick={(e) => {myClickEvent3(e)}}>Just Checking</button>

   </main>
  )
}

export default Content
