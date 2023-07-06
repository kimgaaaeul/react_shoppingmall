import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PrivateRouter from './Components/PrivateRouter';


function App() {
  const [authenticate, setAuthenticate] = useState(false); // true 값이 되면 로그인으로 판단 , false 값이면 로그아웃 상태
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route 
        path='/login' 
        element={<Login setAuthenticate={setAuthenticate} />} />
        <Route 
        path='/product/:id' 
        element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
