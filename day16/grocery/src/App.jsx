import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState } from "react";
import AddItem from "./components/AddItem";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myshopinglist')));
  

  const [newItem, setNewItem] = useState('');

  const[search, setSearch] = useState("");

   const handleChange = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    //console.log()
     setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.filter((item) => item.id !== id);

     setAndSaveItems(listItems);
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
  
  setAndSaveItems(listItems);
 
}

const setAndSaveItems = (newItems) => {
 setItems(newItems);
  localStorage.setItem("myshopinglist", JSON.stringify(newItems));
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
        <Search
            search = {search}
            setSearch = {setSearch}
        />
        <Content 
          //items={items.filter( i => (i.item).includes(search))  }  //Without checking the case
          items={items.filter( i => (i.item).toLowerCase().includes(search.toLowerCase()))  } 
          handleChange = {handleChange}
          handleDelete = {handleDelete}
          
        />
        <Footer len={items.length} />
      </div>
    </>
  );
}

export default App;
