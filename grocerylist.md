### Step # 1

- Create react app using vite

```
> npm create vite@latest grocery
> cd grocery
> npm i
> npm run dev
```


### Step # 2 

- Create the three components Content, Header and Footer
- Create a components folder in src 
  
src/components/Header.jsx
```
import React from 'react'

const Header = ({title}) => {

  return (
    <header  >
      <h1>{title}</h1>
    </header>
  )
}

export default Header

```

components/Footer.jsx
```
import React from 'react'

const Footer = () => {
  const myDate = new Date;
  return (
  <footer>
    <p>Copyright &copy; {myDate.getFullYear()}</p>
  </footer>
  )
}

export default Footer

```

components/Content.jsx
```
import React from "react";


const Content = () => {
    return (
    <main>
      <ul>


           <li className="item" >
            <input type="checkbox" checked='true' />
            <label>Bread</label>
            <button>Delete</button>
          </li>
          <li className="item" >
            <input type="checkbox" checked='false' />
            <label>Apples</label>
            <button>Delete</button>
          </li>
          <li className="item" >
            <input type="checkbox" checked='true' />
            <label>Oranges</label>
            <button>Delete</button>
          </li>
        
      </ul>
    </main>
  );
};

export default Content;

```

### Step # 3

- Update the App.jsx

```
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  return (
    <>
      <div className="App">
        <Header title='Grocery List' />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;

```

### Step # 4

- Update the index.css file 

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 22px;
}

body {
  min-height: 100vh;
  font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100%; 
  max-width: 500px;
  border: 1px solid rgb(5, 5, 5);
  margin: auto;
}

header {
  width: 100%;
  padding: 0 0.25em;
  background-color: rgb(250, 101, 8);
  color: rgb(33, 33, 33);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

footer {
  width: 100%;
  padding: 0.25em;
  background-color: rgb(249, 130, 56);
  color:  rgb(131, 131, 131);
  display: grid;
  place-content: center;
}
ul {
  width: 100%;
  list-style: none;
  padding: 0 0.25rem 0.25rem;
}

ul li::before {
  content: "\200B";
}

.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0.25rem 0;
  background-color: #eee;
}

.item:first-child {
  margin: 0;
}

.item input[type="checkbox"] {
  text-align: center;
  width: 2.5rem;
  width: 48px;
  min-width: 48px;
  height: 2.5rem;
  height: 48px;
  min-height: 48px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.item input[type="checkbox"]:focus + label {
  text-decoration: underline;
}

.item > label {
  font-size: 0.75rem;
  flex-grow: 1;
}

.item svg {
  width: 48px;
  min-width: 48px;
  height: 36px;
  font-size: 1rem;
  color: steelblue;
  cursor: pointer;
}

.item svg:focus, 
.item svg:hover {
  color: red;
  outline: none;
}
```

### Step # 5 

- Use the setState Hook to replace the static html using the map function. [map](https://www.w3schools.com/jsref/jsref_map.asp)
- use the react-icon package to replace the delete button. [react-icons](https://www.npmjs.com/package/react-icons)

```
>npm install react-icons --save
```



```
import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";


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

```

### Step # 6 
 - To implement the check uncheck 

```
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

// 🆕 New function to toggle checkbox status
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

```

### Step # 7 
- Implement the storage
  
```
 const handleChange = (id) => {
    //console.log(`Key : ${id}`);
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item )
    //console.log()
    setItems(listItems)
    localStorage.setItem('myshopinglist', JSON.stringify(listItems))

  };
```
- Apply the style line through on label

```
 <label style={(item.checked ? {textDecoration:'line-through'} : null)} >{item.item}</label>
```

### Step # 8 
- Get the delete button to remove the items
  
```
 const handleDelete = (id) => {
 //console.log(`Key : ${id}`);
 const listItems = items.filter( (item) => item.id !== id   )

 setItems(listItems);
 localStorage.setItem('myshopinglist', JSON.stringify(listItems))
  }
```

```
 <FaTrashAlt role="button"  onClick={() => handleDelete(item.id)} />
```

- Implement the Empty List message
```
 <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
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
          ))}
        </ul>
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
```



### Step # 9 
### Step # 10 
### Step # 11 
### Step # 12 
### Step # 13 


