import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
//https://www.npmjs.com/package/react-icons

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Oranges",
    },
    {
      id: 2,
      checked: false,
      item: "Apples",
    },
    {
      id: 3,
      checked: true,
      item: "Eggs",
    },
      {
      id: 4,
      checked: true,
      item: "Bananas",
    },
{
      id: 5,
      checked: true,
      item: "Kiwi",
    },


  ]);


  return (
    <main>
      <ul>


        {items.map((item) => (
          <li className="item" >
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
           <FaTrashAlt role="button"/>
          </li>
        ))} 
        
      </ul>
    </main>
  );
};

export default Content;
