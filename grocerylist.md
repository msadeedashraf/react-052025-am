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

components/Header.jsx
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
            <input type="checkbox" checked=true />
            <label>Bread</label>
          </li>
          <li className="item" >
            <input type="checkbox" checked=false />
            <label>Apples</label>
          </li>
          <li className="item" >
            <input type="checkbox" checked=true />
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



