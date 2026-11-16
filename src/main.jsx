import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatWa from './components/FloatWa';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css';
function App(){return <BrowserRouter><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/produtos" element={<Products/>}/><Route path="/sobre" element={<About/>}/><Route path="/contato" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/><FloatWa/></BrowserRouter>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
