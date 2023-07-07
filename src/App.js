import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Lin} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './Dashboard';
import Footer from './components/Main_page'
import Main_page from './components/Main_page';
import SignUpForm from './components/Signup_form';
import TestPage from './components/TestPage';

function App() {

  const [login, setLogin] = useState(0);
  //처음 로그인 페이지 들어왔을 때 login : 0
  //로그인 했을 때, login : 1
  //로그아웃 눌렀을 때, login : 2
  // document.title="KEYCOFFEE";
  
  return (
    <div>
      <div>
          <BrowserRouter>
            {/* <Main_page/> */}
            <Routes>
              <Route path="/" element={<Login login={login} setLogin={setLogin}/>} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/testpage" element={<TestPage login={login} setLogin={setLogin}/>} />
              <Route path="/main" element={<Main_page/>} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;