import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import background_pic from '../img/keycoffee2.jpg';
import keycoffee_logo from '../img/keycoffee_logo.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import main_menu from '../img/main-menu.png';

const OrderPage = (props) => {

    return (
        <>
            <div className='py-20'>
                <nav>
                    <div>
                        <button className="text-gray-900 hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">주문하기</button>
                        <button className="text-gray-900 hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">주문내역</button>
                        <button className="text-gray-900 hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">입고내역</button>
                        <button className="text-gray-900 hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">승인관리</button>
                    </div>
                </nav>
            </div>
            
        </>
    )

}

export default OrderPage;   