import './App.css';
import { Routes, Route } from 'react-router';

import Header from "./component/Header"
import Comic from "./component/Comic"
import Home from "./component/Home"
import Man from "./component/Man"
import Women from "./component/Women"
import Footer from "./component/Footer"
import Wishlist from './component/Wishlist';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Comic />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/man' element={<Man />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App
