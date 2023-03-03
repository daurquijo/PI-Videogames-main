import './App.css';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom'
import CardDetail from './pages/CardDetail/CardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route path="/videogame/:id" element={<CardDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
