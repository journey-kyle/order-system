import React, {useState, useEffect} from 'react';
import '../output.css';
import background_pic from '../img/keycoffee1.jpg';
import {Link, Route, Routes, useInRouterContext, useNavigate} from 'react-router-dom';
import axios from 'axios';
import url from '../fcs/const';
import SignUpForm from './Signup_form';
import Main_page from './Main_page';
import Navigation from './Navigation';
import OrderPage from './OrderPage';
import Home from './Home';
import Footer from './Footer';

const Main = (props) => {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({id:0});
  const [itemSelect, setItemSelect] = useState("Home");



  useEffect(function(){
    if(props.login !== 2){
      if(userInfo.id === 0){
        try{
          // console.log("login : ", props.login)
          axios.get(url+"/accesstoken",{withCredentials:true}).then(result=>{
              if(result.data === undefined) {
                navigate('/');
              }
              setUserInfo(result.data);
              props.setLogin(1);
          })
        }catch(error){
          // console.log("error : ",error);
        }
      }
    }
  },[]);

  useEffect(function(){

    if(props.login === 2){
      // console.log("login = ", props.login);
      // alert("로그아웃 되었습니다.");
      // window.open("/", "_self");
      navigate('/');
    }
  },[props.login]);

  useEffect(()=>{

      setTimeout(function(){
        if(userInfo.name === "JsonWebTokenError" || userInfo.name === "TokenExpiredError") {
          alert("만료된 페이지 입니다.");
          navigate("/");
        }else{
          if(userInfo.name !== undefined) {
            document.getElementById("username").innerText = userInfo.name+"님";
            document.getElementById("branch").innerText = userInfo.branch;
          }
        }
      },10);
  }, [userInfo]);


  return (
    <>
      <div className='fixed w-full bg-gray-800 flex justify-end z-10'>
        <div className='ml-10 flex items-baseline space-x-4'>
          <div id="branch" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            매장
          </div>
          <button id="username" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{

            }}>회원
          </button>
        </div>
        <div className="flex justify-end rounded-lg">
          <button id="username" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{
            let out = window.confirm("로그아웃 하시겠습니까?");
            if(out){
              try{
                axios.get(url+"/logout", {withCredentials:true}).then(result=>{
                  // console.log("result : ",result);
                  if(result.data === false) props.setLogin(2);
                });
              }catch(error){
                // console.log(error);
            }
          }}}>로그아웃
          </button>
        </div>    
      </div>
      <Navigation itemSelect={itemSelect} setItemSelect={setItemSelect}/>
      {itemSelect === "Home" ? <Home/> : itemSelect === "발주관리" ? <OrderPage/> : itemSelect === "매출관리" ? <Main_page/> : ""}

      
      <Footer />

    </>
  );
}

export default Main;
