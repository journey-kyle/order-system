import React, {useState, useEffect} from 'react';
import '../output.css';
import {Link, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import url from '../fcs/const';

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