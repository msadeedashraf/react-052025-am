import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState } from "react";
import AddItem from "./components/AddItem";
function App() {
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

  const [newItem, setNewItem] = useState('');

   const handleChange = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    //console.log()
    setItems(listItems);
    localStorage.setItem("myshopinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
    localStorage.setItem("myshopinglist", JSON.stringify(listItems));
  };


  const handleAdding = (e) => {
    e.preventDefault();
    console.log("Check Adding")
    console.log(newItem);

    if (!newItem) return;
    addNewItem(newItem);
    setNewItem('');

  }

const addNewItem = (item) => {

  const id = items.length ? items[items.length - 1].id+1 : 1;
  const myNewItem = { id, checked:false, item };

  const listItems = [...items, myNewItem];
  setItems(listItems);
  localStorage.setItem("myshopinglist", JSON.stringify(listItems));
}


  return (
    <>
      <div className="App">
        <Header title="Grocery List" />
        <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            handleAdding={handleAdding} 
        />
        <Content 
          items={items} 
          handleChange = {handleChange}
          handleDelete = {handleDelete}
          
        />
        <Footer len={items.length} />
      </div>
    </>
  );
}

export default App;
