import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import {Routes,Route,Link} from 'react-router-dom';

import './Main.css'
const Main = ({handleChange}) => {
  return (
    <div>
       <header className='navbar navbar-dark bg-dark navbar-expand-lg w-500'>
        <div className='container'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'><span className='navbar-toggler-icon'></span></button>
           <div className='collapse navbar-collapse ' id='navbarNav'>
           <ul className='navbar-nav ms-auto'>
               <li  className='nav-item'><Link className='nav-link active' to='/side'>Category</Link></li>
            </ul>
           </div>
        </div>
        </header>
       <div>
              <Routes>
                  <Route path='/side' element={<Sidebar handleChange={handleChange} />} />
              </Routes>
          
       </div> 
    </div>
  )
}

export default Main