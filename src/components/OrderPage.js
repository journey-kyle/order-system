import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import background_pic from '../img/keycoffee2.jpg';
import keycoffee_logo from '../img/keycoffee_logo.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

const OrderPage = (props) => {

    return (
        <>
            <p>여기는 발주 페이지 입니다. 만들어가보겠습니다.</p>
        </>
    )

}

export default OrderPage;