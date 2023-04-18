import './App.css';
import NavBar from './navbar/NavBar';
import {Routes, Router, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    
    <Routes>
        <Route path={"/"} element={<Layout/>} > 
        <Route index element={<IndexPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        </Route>
        
    </Routes>


  );
}

export default App;
