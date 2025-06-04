import React from 'react'
import {useRef} from 'react'
import { FaPlus } from "react-icons/fa";
const AddItem = ({newItem, setNewItem, handleAdding}) => {

  const inputRef = useRef(null)
  return (
    <form className='addForm' onSubmit={handleAdding}>

        <label htmlFor="addItem"> Add Item</label>
        
        <input 
          type="text" 
          ref={inputRef}
          autoFocus 
          id='addItem' 
          placeholder='Add Item' 
          required 
          value={newItem}
          onChange={(e)=> setNewItem(e.target.value)}
        />
        
        
        <button type='submit' onClick={()=> inputRef.current.focus()}  > <FaPlus></FaPlus></button>


    </form>
  )
}

export default AddItem
