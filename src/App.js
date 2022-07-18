import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Favourites } from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Hello World</h1> */}
      {/* <h2>Navbar</h2> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Movies />
          {/* <Pagination /> */}
        </>}>
        </Route>
        <Route path="/favourites" element=
          {<Favourites/> }>

        </Route>
      </Routes>
      {/* <h2>Banner</h2> */}
      {/* <h2>Trending</h2> */}
      {/* <h2>Pagination</h2> */}
    </BrowserRouter>
  );
}

export default App;
