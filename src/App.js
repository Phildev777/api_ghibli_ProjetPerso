import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Présentation from './components/Présentation.jsx';
import Films from './components/Films';
import Avenir from './components/Avenir';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-complet">
          <header>

            <div className="header-complet">
              <div id="Banner">
                <h1>Les oeuvres du Studio Ghibli</h1>
              </div>
              <div className="logo">
                <img src="assets/logoGhibli.png" alt="logo" />

                <div className='App'>

                  <ul className="App-header">

                    <li>
                      <Link to="/" className='lien'><span>Présentation</span></Link>
                    </li>
                    <li>
                      <Link to="/films" className='lien'><span>Films</span></Link>
                    </li>
                    <li><Link to="/Avenir" className='lien'><span>Infos Films</span></Link>
                    </li>


                  </ul>
                </div>
              </div>
              <Routes>
                <Route exact path='/' element={< Présentation />}></Route>
                <Route exact path='/Films' element={< Films />}></Route>
                <Route exact path='/Avenir' element={< Avenir />}></Route>
              </Routes>
            </div>

          </header>
          <body>

          </body>
          <footer>
            <div className="footer-base">
              <p>Creator : BERRA Philippe novembre 2022</p>

            </div>

          </footer>
        </div>
      </Router>

    );
  }
}

export default App;

