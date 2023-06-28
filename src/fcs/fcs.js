import React from 'react';
import '../output.css';
import {Link, Route, Routes} from 'react-router-dom';
import axios from 'axios';


const url = 'http://localhost:4000';

function alive(){
    

    try{
        axios.defaults.withCredentials = true;
        axios.get(url+"/accesstoken").then((result)=>{
            if(result.data.name === "TokenExpiredError") {
                try{
                axios.get(url+"/refreshtoken").then((results)=>{
                if(results.data.name === "TokenExpiredError") alert("페이지가 만료되었습니다. 다시 로그인 해주세요.");
                else if(results.data.name === "JsonWebTokenError"){
                    alert("유효하지 않은 페이지 입니다.");
                }else{
                    console.log(results);
                }
                })}catch(error){
                    console.log(error);
                }
            }
            else if(result.data.name === "JsonWebTokenError"){
                alert("유효하지 않은 페이지 입니다.");
            }
            else{
                console.log(result);
            }
        });
    }catch(error){
        console.log(error);
    }

}

function hello(){
    console.log("helloworld");
}

export {alive, hello};