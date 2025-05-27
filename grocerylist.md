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
          </li>
          <li className="item" >
            <input type="checkbox" checked='false' />
            <label>Apples</label>
          </li>
          <li className="item" >
            <input type="checkbox" checked='true' />
            <label>Oranges</label>
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



