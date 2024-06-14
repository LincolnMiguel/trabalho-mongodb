import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

export default function App() {
  return (
    <>
      <Router>
        <nav className='navbar navbar-dark bg-dark'>
          <div className='container-fluid'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Catálogo</Link>
              </li>
              <li className='nav-item'>
                <Link to='/dados' className='nav-link'>Novo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<LivroLista />} />
          <Route path='/dados' element={<LivroDados />} />
        </Routes>
      </Router>
    </>
  );
}


