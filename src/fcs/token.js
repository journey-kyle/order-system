import React, {useState, useEffect} from 'react';
import '../output.css';
import {Link, Route, Routes} from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';



// state 1 = accesstoken 유효함 -> 로그인상태
// state 2 = accesstoken 만료, refreshtoken 유효함 -> accesstoken 재발급 및 로그인상태
// state 3 = accesstoken 만료, refreshtoken 만료 -> 로그아웃 및 token 삭제 / alert : 만료된 페이지 입니다.
// state 4 = accesstoken / refreshtoken 문제 생김 -> 로그아웃 및 token 삭제 / alert : state error
// state 5 = 



const alive = async () => {

    let state;

    try{
        axios.defaults.withCredentials = true;
        await axios.get(url+"/accesstoken").then((result)=>{
            if(result.data.name === "JsonWebTokenError"){
                state = 4;
            }else{
                state = 1;
            }

            return result.data;

        });
    }catch(error){
        console.log(error);
        state = 5;
        return error;
    }

}

function hello(){
    console.log("helloworld");
}

export {alive, hello};