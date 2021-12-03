import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import SubMain from "./components/SubMain.js";

const flex = {
  display: "flex",

}



function App() {
  return (
    <div className="App">

      <Header firstName="Shayan" lastName="Valaie" age={25} />






    </div>


  );
}

export default App;
