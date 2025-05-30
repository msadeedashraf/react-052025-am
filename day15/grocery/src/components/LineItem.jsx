import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleChange, handleDelete}) => {
  return (
     <li className="item" >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />

              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} />
            </li>
  )
}

export default LineItem
