import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Jobsearch from "./components/Jobsearch";

import Joblisting from "./components/Joblisting";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/"  element={ <Main />}   ></Route>
        <Route path="/Jobsearch"  element={ <Jobsearch/>}   ></Route>
        <Route path="/Joblisting"  element={ <Joblisting />}   ></Route>
        <Route path="/Terms"  element={ <Terms/>}   ></Route>
        <Route path="/Privacy"  element={ <Privacy />}   ></Route>
        <Route path="/Contactus"  element={ <Contactus />}   ></Route>
      
      </Routes>
     

      <Footer />
    </>
  );
}

export default App;
