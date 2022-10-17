import logo from './logo.svg';
// put bootstrab links before to not override css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './component/header/Header';
import Bigcontainer from './component/bigContainer/Bigcontainer'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Bigcontainer></Bigcontainer>
    </>
  );
}

export default App;
