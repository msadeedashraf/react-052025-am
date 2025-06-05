import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import apiRequest from  "./apiRequest"

function App() {
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const [fetchError, setFetchError] = useState(null);
  
  const [isLoading, setIsLoading] = useState(true);


  const API_URI = "http://localhost:3500/items";

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

      try 
      {
        const response = await fetch(API_URI);

        if (!response.ok )  throw Error('Did not receive expected data')
          
        const listItems = await response.json();

        console.log("Testing fetch Items");
        console.log(listItems);
        setItems(listItems);

        setFetchError(null);

      } catch (err) {

        console.log(err.message)
        setFetchError(err.message);
      }
        finally 
    {
      setIsLoading(false);
      
    }


    };



    //Introduced timeout to mimic wait time while data being loaded 
    setTimeout(() => { (() => fetchItems())();}, 5000);



   // (() => fetchItems())();
    
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

  const handleChange = async (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    //console.log()
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id );
console.log(myItem)
const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    };
    const newURL = `${API_URI}/${id}`
    const result = await apiRequest(newURL, updateOptions);
    if (result) setFetchError(result);

  };

  const handleDelete = async (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);

    const deleteOptions = {method:'DELETE'}
     const newURL = `${API_URI}/${id}`
    const result = await apiRequest(newURL, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleAdding = (e) => {
    e.preventDefault();
    //console.log("Check Adding")
    //console.log(newItem);

    if (!newItem) return;
    addNewItem(newItem);
    setNewItem("");
  };

  const addNewItem = async (item) => {
    const id = items.length ?  (parseInt(items[items.length - 1].id)  + 1).toString() : 1;
    const myNewItem = { id, checked: false, item };

    const listItems = [...items, myNewItem];

    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URI, postOptions);
    if (result) setFetchError(result);
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
       
        
        <main>
        {isLoading && <p style={{color:"green"}} > {`Please wait few seconds before the data gets loaded`}</p> }
        {fetchError && <p style={{color:"red"}} > {` Error: ${fetchError}`}</p> }
        { !fetchError  && !isLoading && <Content
          items={items.filter((i) =>
            i.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />}
        
        </main>
        <Footer len={items.length} />
      </div>
    </>
  );
}

export default App;
