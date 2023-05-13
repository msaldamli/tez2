import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MapPhoto from './pages/MapPhoto';
import About from './pages/About';
import Comment from './pages/Comment';
import Header from './components/Header';
import Login from './pages/login';
import Register from './pages/register';
import RequireAuth from './components/requireauth';
import NotFound from './components/NotFound';
import Location from './pages/Location';
import Add from './pages/Add';
import AddNext from './pages/AddNext';
import ShoweAd from './pages/ShoweAd';
import ForComment from './pages/ForComment';
import ForCommentNext from './pages/ForCommentNext';
import Teseract from './pages/Teseract';

function App() {
  return (
    <div className='App'>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Comment' element={<Comment />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/Add' element={<Add />}></Route>
            <Route path='/AddNext' element={<AddNext />}></Route>
            <Route path='/ShoweAd' element={<ShoweAd />}></Route>
            <Route path='/ForComment' element={<ForComment />}></Route>
            <Route path='/ForCommentNext' element={<ForCommentNext />}></Route>

            <Route path='/Teseract' element={<Teseract />}></Route>

            <Route path='/location/:locationId' element={<Location />}></Route>

            <Route element={<RequireAuth />}>
              <Route path='/MapPhoto' element={<MapPhoto />}></Route>

              <Route
                path='/ForCommentNext/:locationId'
                element={<ForCommentNext />}
              ></Route>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
