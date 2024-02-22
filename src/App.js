import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Authorization';
function App() {
  return (
   <Routes>
    <Route exact path='/' element={<Auth />} />


    <Route path='/home' element={<Home />} />
   </Routes>
  );
}

export default App;
