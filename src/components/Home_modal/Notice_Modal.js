import React, { useEffect, useState, Component, useRef} from 'react';
import add_note from '../../img/add_note_icon.png';
import KeyEvent from './KeyEvent';
import url from '../../fcs/const';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

const Notice_Modal = (props) =>{

    const [noticeData, setNoticeData] = useState({title:"",content:"",attached:""})


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const title = useRef();
    const content = useRef();
    // const attached = useRef();

    const navigate = useNavigate();

    title.current = watch("title");
    content.current = watch("content");
    // attached.current = watch("email");

    useEffect(function(){

        setNoticeData({
            title : document.getElementById("title"),
            content : document.getElementById("content"),
            attached : ""
        });

        console.log(noticeData);

    },[])


    return(
        <>
            <KeyEvent event1={props.closeNoticeModal}/>
            {props.isNoticeOpen &&(
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute w-500 h-1000 bg-gray-500 opacity-20"></div>

            <div className="modal-container bg-white w-full md:max-w-2xl my-auto mx-auto rounded shadow-lg z-50 overflow-y-auto rounded-2xl">
                <div className="py-4 text-left px-4">
                    <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">공지사항 추가</h2>
                                
                            </div>

                            <div className="modal-body">
                                <p>제목</p>
                                <input id="title" className="w-full border border-gray-400 border-2 bg-white"></input>
                                <p>내용</p>
                                <textarea id="content" className="w-full h-80 border border-gray-400 border-2 bg-white"></textarea>
                                <div className="border border-gray-400 border-2 p-6 flex justify-center">
                                    <button className="flex" onClick={()=>{
                                        
                                    }}>
                                        <img src={add_note} className="w-10"/>
                                        <p className="mt-2 ml-4">파일 첨부</p>
                                    </button>
                                    
                                </div>
                            </div>

                            <div className="modal-footer pt-3 flex justify-between">
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded" onClick={()=>{

                                    try{
                                        axios.post(url+"/addNotice",{withCredentials:true},noticeData).then(result=>{
                                            if(result.data === undefined) {
                                                alert("데이터가 없다!!");
                                            }
                                            else{
                                                console.log("여기까지 ok?");
                                            }
                                        })
                                    }catch(e){
                                        console.log("에러다! : ", e);
                                    }
                                }}>
                                    추가
                                </button>
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded" onClick={props.closeNoticeModal}>
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Notice_Modal;