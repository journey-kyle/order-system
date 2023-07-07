import React, {useState, useEffect} from 'react';
import '../output.css';
import background_pic from '../img/keycoffee1.jpg';
import {Link, Route, Routes, useInRouterContext, useNavigate} from 'react-router-dom';
import axios from 'axios';
import url from '../fcs/const';
import keycoffee_logo from '../img/keycoffee_logo.png';
import main_menu from '../img/main-menu.png';

const Navigation = (props) =>{

    return(
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to="/testpage" ><img src={keycoffee_logo} alt="keycoffee logo" className='w-20'/></Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{
                                    props.setItemSelect("Home");
                                }}>Home</button>
                                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{
                                    props.setItemSelect("발주관리");
                                }}>발주관리</button>
                                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{
                                    props.setItemSelect("매출관리");
                                }}>매출관리</button>
                                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{
                                    props.setItemSelect("통계");
                                }}>통계</button>
                                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>{
                                    props.setItemSelect("Issue");
                                }}>Issue</button>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={()=>{
                                document.getElementById("navButton").classList.toggle("hidden");
                                }}>
                                <img src={main_menu} alt="main menu" className='w-6'/>
                                {/* <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg> */}
                            </button>
                        </div>
                    </div>
                </div>
                <div id="navButton" className="hidden md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mx-auto">
                        <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={()=>{
                            props.setItemSelect("Home");
                        }}>Home</button>
                        <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={()=>{
                            props.setItemSelect("발주관리");
                        }}>발주관리</button>
                        <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={()=>{
                            props.setItemSelect("매출관리");
                        }}>매출관리</button>
                        <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={()=>{
                            props.setItemSelect("통계");
                        }}>통계</button>
                        <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={()=>{
                            props.setItemSelect("Issue");
                        }}>Issue</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;