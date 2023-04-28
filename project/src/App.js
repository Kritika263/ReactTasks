import Header from './components/Header';
import Card from './components/Card'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardDetails from './components/CardDetails';
import Cart from './components/Cart'
import Order from './components/Order';
function App() {
  return (
    <div className="App">
      <Header></Header>
      
<Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/books/:id' element={<CardDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  );
}
export default App;
