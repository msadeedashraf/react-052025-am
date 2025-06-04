import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");


/*
//Example for useEffect structure
useEffect( ()=> {
  console.log("Im testing my useEffect at the load time")

  const myTestFunction = () => { 

    try {
    console.log("Im a testFunction sitting inside useEffect")
    }
    catch (err) { 
      console.log(err.stack)
    }

  };
 
  (  () =>  myTestFunction()  )()

}, [])

*/

  useEffect(() => {
    console.log("load data");

    const fetchItems = async () => {
      console.log("printing testItems");

      try {
        const response = await fetch("http://localhost:3500/items");
        const listItems = await response.json();

        console.log("Testing fetch Items");
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };

    (() => fetchItems())();
    
  }, []);

  /*
  useEffect(
    ( ) => {}
  );
  */

  /*
  useEffect(
    ( ) => { console.log('Checking UseEffect')}
    
  );
*/
  /*
  useEffect(
    ( ) => { console.log('Checking UseEffect')}
    , []
  );
 */
  /*
  useEffect(
    ( ) => { console.log('Checking UseEffect')}
    , [items]
  );
*/

  useEffect(() => {
    localStorage.setItem("myshopinglist", JSON.stringify(items));
  }, [items]);

  const handleChange = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    //console.log()
    setItems(listItems);
  };

  const handleDelete = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
  };

  const handleAdding = (e) => {
    e.preventDefault();
    //console.log("Check Adding")
    //console.log(newItem);

    if (!newItem) return;
    addNewItem(newItem);
    setNewItem("");
  };

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };

    const listItems = [...items, myNewItem];

    setItems(listItems);
  };

  return (
    <>
      <div className="App">
        <Header title="Grocery List" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleAdding={handleAdding}
        />
        <Search search={search} setSearch={setSearch} />
        <Content
          items={items.filter((i) =>
            i.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
        <Footer len={items.length} />
      </div>
    </>
  );
}

export default App;
