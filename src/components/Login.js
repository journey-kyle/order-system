import React, { useEffect, useState } from 'react';
import '../output.css';
import keycoffee_logo from '../img/keycoffee_logo.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import background_pic from '../img/keycoffee1.JPG';
import axios from 'axios';


// let [ID, fixid] = useState("");
// let PW = 'world';

let sendData = {"ID":"","PW":""};


const Login = () => {
  return (

  <div className="flex items-center justify-center min-h-screen bg-opacity-50">
    <div className="fixed inset-0 flex items-center justify-center">
      <img src={background_pic} alt="Background Image" className="object-cover min-w-full min-h-full absolute z-0"/>
    </div>
    <div className="max-w-md w-full z-10 flex flex-col items-center justify-center">
        <img src={keycoffee_logo} alt="keycoffee logo" className='w-60'/>
        <form>
          <div className="mb-4">
            {/* <label htmlFor="ID" className="black mb-2 text-md font-medium text-gray-600"></label> */}
            <input type="text" id="ID" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder='아이디'/>
          </div>
          <div className="mb-6">
            {/* <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-600"></label> */}
            <input type="password" id="PW" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder='비밀번호'/>
          </div>
          <div className='flex justify-between'>
            <button type="button" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:bg-blue-700" onClick={()=>{
              sendData.ID = document.getElementById("ID").value;
              sendData.PW = document.getElementById("PW").value;

              axios.post('http://138.2.57.165:4000/server/usr', sendData).then((result)=>{
                console.log(result.data);
                if(!result.data.length){
                  console.log("이써!");
                }else{
                  console.log("엄써!?")
                }
                
              })
            }}>Log In</button>
            {/* <Link to="signup"><button type="button" className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:bg-blue-700">회원가입</button></Link> */}
          </div>
        </form>
      </div>
  </div>
  
  );
}

export default Login;