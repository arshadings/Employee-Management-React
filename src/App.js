import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
import Login from './Login';
import Register from './Register';


import { ToastContainer } from 'react-toastify'
import FallbackUI from './FallbackUI';


function App() {
  return (
    <div className="App">

      <ToastContainer theme='colored'></ToastContainer>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <EmpListing /> } />

          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />

          <Route path='/createEmployee' element={ <EmpCreate /> } />
          <Route path='/viewEmployeeDetails/:id' element={ <EmpDetails /> } />
          <Route path='/editEmployeeDetails/:id' element={ <EmpEdit /> } />
          <Route path='*' element={ <FallbackUI /> } />
        </Routes>
      </BrowserRouter>

      
    </div>
    
  );
  
}

export default App;
