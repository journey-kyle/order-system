import React from 'react';
import {BrowserRouter, Routes, Route, Lin} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './Dashboard';
import Footer from './components/Main_page'
import Main_page from './components/Main_page';
import SignUpForm from './components/Signup_form';
import TestPage from './components/TestPage';

function App() {
  document.title="KEYCOFFEE";
  
  
  return (
    <div>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/" element={<SignUpForm/>} />
              <Route path="/signup" element={<SignUpForm/>} />
              <Route path="/testpage" element={<TestPage/>} />
              <Route path="/main" element={<Main_page/>} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;