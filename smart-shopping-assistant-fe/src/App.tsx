import './App.css'
import Categories from './components/Categories';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
  <Box className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Box>);
}

export default App;
