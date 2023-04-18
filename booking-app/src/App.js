import './App.css';
import NavBar from './navbar/NavBar';
import {Routes, Router, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    
    <Routes>
        <Route index element={<IndexPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>


  );
}

export default App;
