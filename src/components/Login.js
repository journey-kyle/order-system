import React from 'react';
import '../output.css';
import background_pic from '../img/keycoffee1.jpg';

let ID = 'hello';
let PW = 'world';


const Login = () => {
  return (

  <div class="flex items-center justify-center min-h-screen">
    <div class="fixed inset-0 flex items-center justify-center">
      <img src={background_pic} alt="Background Image" class="object-cover min-w-full min-h-full absolute z-0"/>
    </div>
    <div className="max-w-md w-full z-10">
        <h2 className="text-3xl font-bold mb-4">KEYCOFFEE</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="black mb-2 text-md font-medium text-gray-600">이메일</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-600">비밀번호</label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className='flex justify-between'>
            <button type="submit" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:bg-blue-700">로그인</button>
            <button type="submit" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:bg-blue-700">회원가입</button>
          </div>
        </form>
      </div>
  </div>
  
  );
}

export default Login;

