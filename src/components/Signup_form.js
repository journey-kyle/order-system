import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import background_pic from '../img/keycoffee2.jpg';
import keycoffee_logo from '../img/keycoffee_logo.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';


function SignUpForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const id = useRef();
  const pw = useRef();
  const email = useRef();
  const branch = useRef();
  const level = useRef();

  id.current = watch("id");
  pw.current = watch("pw");
  email.current = watch("email");
  branch.current = watch("branch");
  level.current = watch("level");

  // const onSubmit = data => console.log(data);

  let [pwE, setPwE] = useState(0)
  let [dupleE, setDupleE] = useState(false)

  // const serviceKey = 'kAiLDgObwpKuhrpEw3Sv1mdXTyKxxTGb4bZ8WXARB0OjuqySB3vnEU0ygAt73e1LOkVdSLg2Oafov24B4bd%2Bpw%3D%3D'
  let sendData = {"id":"", "password":"", "email":"", "branch":"", "level":""}

  function emailcheck(email){
      let regExp = /[0-9a-zA-Z][_0-9aA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
      if(email.length === 0){ document.getElementById("emailText").innerHTML = "E-mail을 입력하세요."; return 0; }
      if(!email.match(regExp)){ document.getElementById("emailText").innerHTML = "올바른 이메일 주소가 아닙니다."; return 0; }
      else return 1;
  }

  function passwordcheck(pw, pwcheck){

      let regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[~!@#$%^&*<>?]).{8,20}$/i;
      if(pw.length === 0 && pwcheck.length === 0) setPwE(1)    //아무것도 입력하지 않음
      else if(!pw.match(regExp)) setPwE(2)     //올바른 비밀번호가 아님.
      else{
          if(pw === pwcheck) setPwE(3)//<p>비밀번호가 일치합니다.</p>
          else if(pwcheck.length === 0) setPwE(4)//<p></p>
          else setPwE(5) //<p>비밀번호가 일치하지 않습니다.</p>
      }
  }
  

  


  return (
    <>
  
      {/* <div className='min-h-screen py-40 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <div className='container mx-auto rounded-3xl bg-cover bg-center'>
          <div className='flex flex-col lg:flex-row p-10 rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div className='w-1/2 relative'>
              <img src={background_pic} alt="Background Image" class="min-w-full min-h-full z-0 rounded-3xl bg-opacity-50"/>
              <div className='p-3 absolute top-2 left-0 w-full h-full font-bold text-purple-600 z-20'>
                <h1>Welcome</h1>
                <p>Hello ladies and gentlemen. We are gathering our partners like you. </p><p>We will do my best to support you. Thank you.</p>
              </div>
            </div>
            <div className='w-1/2 p-4'>
              <h2>Register</h2>
              <label>E-mail</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              <label>Password</label>
              <input type="password" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              <label>Password 확인</label>
              <input type="password" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div> */}


      <div className='min-h-screen py-40 bg-gradient-to-r from-blue-300 via-pink-300 to-red-300'>
        <div className='inset-0 flex items-center justify-center text-white text-xl md:text-5xl font-bold m-5'>
          <img src={keycoffee_logo} alt="keycoffee logo" className='md:w-40 md:h-20 w-20 h-10'/>
          <h1>KEYCOFFEE</h1>
        </div>
        <div className='container mx-auto rounded-3xl bg-cover bg-center'>
          <div className='flex flex-col lg:flex-row lg:p-10 p-5 rounded-xl mx-auto shadow-lg overflow-hidden bg-gray-200'>
            <div className='lg:w-3/5 relative lg:m-4'>
              <img src={background_pic} alt="Background Image" className="min-w-full min-h-full z-0 rounded-3xl bg-opacity-50"/>
              <div className='p-3 absolute top-2 left-0 h-full font-bold text-purple-600 z-10 text-2xl'>
                <h1>STAFF ONLY</h1>
              </div>
            </div>
            <div className='lg:w-2/5 p-4 m-4'>
              <form action='http://localhost:3000/signup' method='POST' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='font-bold lg:text-2xl text-lg'>회원가입</h2>
                <br/>
                
                {/* <label className="font-bold">ID</label> */}
                <input type="id" id="id" name="id" className="flex flex-col w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder='아이디' {...register("id",{
                  required : true,
                  minLength : 5
                  })} />
                {errors.id && errors.id.type === "required" && <p className="text-red-500">This id is required.</p>}
                {errors.id && errors.id.type === "minLength" && <p className="text-red-500">ID must have at least 5 characters.</p>}
                <br/>
                
                {/* <label className="font-bold">Password</label> */}
                <input type="password" id="pw" name="pw" className="flex flex-col w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder='비밀번호' {...register("pw",{
                  required : true,
                  minLength : 8
                })} />
                {errors.pw && errors.pw.type === "required" && <p className="text-red-500">This field is required.</p>}
                {errors.pw && errors.pw.type === "minLength" && <p className="text-red-500">Password must have at least 8 characters.</p>}
                <br/>

                {/* <label className="font-bold">Password 확인</label> */}
                <input type="password" id="pwchk" className="flex flex-col w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder='비밀번호 확인' {...register("pwchk",{
                  required : true,
                  validate : (value) => value === pw.current
                })}/>
                {errors.pwchk && errors.pwchk.type === "required" && <p className="text-red-500">This field is required.</p>}
                {errors.pwchk && errors.pwchk.type === "validate" && <p className="text-red-500">The password do not match.</p>}
                <br/>

                {/* <label className="font-bold">email</label> */}
                <input type="email" id="email" name="email" className="flex flex-col w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder='E-mail'/>
                <br/>

                {/* <label className="font-bold">Level</label> */}
                <input type="level" id="level" name="level" className="flex flex-col w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder='Level' {...register("level",{
                  required : true,
                  min : 0,
                  max : 2
                })}/>
                {errors.level && errors.level.type === "required" && <p className="text-red-500">This field is required.</p>}
                {errors.level && errors.level.type === "min" && <p className="text-red-500"> Level must be the value among 0 to 2 .</p>}
                {errors.level && errors.level.type === "max" && <p className="text-red-500"> Level must be the value among 0 to 2 .</p>}
                <br/>

                {/* <label className="font-bold">지점명</label> */}
                <input id="branch" name="branch" className="flex flex-col w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500" placeholder='지점명'/>
                <br/>
                
                <Link to="/signup"><button className='flex float-left bg-blue-500 rounded-xl p-4 text-lg font-bold text-white mt-4 hover:bg-blue-700'>뒤로가기</button></Link>
                <button className='flex float-right bg-blue-500 rounded-xl p-4 text-lg font-bold text-white mt-4 hover:bg-blue-700' onClick={(e=>{
                  sendData = {"id":id.current, "pw":pw.current, "email":email.current, "branch":branch.current, "level":level.current};
                  
                })}>가입하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );



// // const SignUpForm = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //     name: "",
// //     branch: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // 여기에서 회원가입 처리 또는 데이터 전송 로직을 작성합니다.
// //     console.log(formData);
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="max-w-md w-full p-6 bg-white rounded shadow">
// //         <h2 className="text-2xl font-bold mb-4">회원가입</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //               이메일
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               id="email"
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// //               비밀번호
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               id="password"
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
// //               비밀번호 확인
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               id="confirmPassword"
// //               type="password"
// //               name="confirmPassword"
// //               value={formData.confirmPassword}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
// //               이름
// //             </label>
// //             <input
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               id="name"
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
// //               소속지점
// // </label>
// // <input
// //            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //            id="branch"
// //            type="text"
// //            name="branch"
// //            value={formData.branch}
// //            onChange={handleChange}
// //            required
// //          />
// // </div>
// // <div className="flex items-center justify-between">
// // <button
// //            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //            type="submit"
// //          >
// // 가입하기
// // </button>
// // </div>
// // </form>
// // </div>
// // </div>
// );
};
export default SignUpForm;