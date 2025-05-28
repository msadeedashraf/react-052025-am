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
      checked: false,
      item: "Bananas",
    },
    {
      id: 5,
      checked: true,
      item: "Kiwi",
    },
  ]);

  const handleChange = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item )
    //console.log()
    setItems(listItems)

  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChange(item.id)}
            />

            <label>{item.item}</label>
            <FaTrashAlt role="button" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
