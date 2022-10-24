import logo from './logo.svg';
// put bootstrab links before to not override css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './component/header/Header';
import Bigcontainer from './component/bigContainer/Bigcontainer'
import Register from './component/register/Rigester';
import AllExercise from './pages/AllExercise';
import { Route, Routes, useLocation } from 'react-router-dom';
import FavExercise from './pages/FavExercise';
import { useState } from 'react';
import { favContext } from './config/favContext';
import AllTrainee from './pages/AllTrainee';
import ToDoListExercise from './pages/ToDoListExercise';
import { assignExContext } from './config/assignExContext';

function App() {
  const [fav, setFav] = useState([]);
  const [assignEx, setAssignEx] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Bigcontainer></Bigcontainer>
      {/* <Register></Register> */}
      <assignExContext.Provider value={{ fav, setFav }}>
        <favContext.Provider value={{ assignEx, setAssignEx }}>
          <Routes>
            <Route path='/AllExercise' element={<AllExercise />} />
            <Route path='/FavExercise' element={<FavExercise />} />
            <Route path='/AllTrainee' element={<AllTrainee />} />
            <Route path='/ToDoListExercise' element={<ToDoListExercise />} />

          </Routes>
        </favContext.Provider>
      </assignExContext.Provider>
    </>
  );
}

export default App;
