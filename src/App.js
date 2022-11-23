import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Card from './Card';
import CardList from './CardList';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MoviesComponent from './Data/Movies/MoviesComponent';
function App() {
    let isMovies = true;

    return (
      <Router>
      <div className="App">
                {/*  <Navigation />*/}
                <div className='Nav--Project'>
                    <ul className='Nav--Project--ul'>
                  <li>
                      <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/movies'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/shows'>Shows</Link>
                        </li>
              </ul>
                    </div>

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/movies' element={<MoviesComponent />}></Route>
          </Routes>
            </div>
        </Router>
  );
}

export default App;
