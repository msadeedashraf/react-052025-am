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
