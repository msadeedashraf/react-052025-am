import "./App.css";
import Greeting from "./components/Greeting";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Footer2  from "./components/Footer2";
function App() {
  return (
    <>
      <h1>Welcome Everyone To Learning React</h1>
      <Main />
      <Footer />
      <Footer2 year="2030" />
    </>
  );
}

export default App;
