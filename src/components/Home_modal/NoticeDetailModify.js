import React, { useEffect, useState, Component, useRef} from 'react';
import axios from 'axios';
import url, { titleLength, contentLength, lgcontentLength } from '../../fcs/const';
import KeyEvent from './KeyEvent';
import x_icon from '../../img/x_icon.png';
import add_note from '../../img/add_note_icon.png';

const NoticeDetailModify = (props) => {

    const [notice, setNotice] = useState([
        {
            id:1,
            title:" ",
            content:" ",
            attached:"",
            created_time:" "
        }
    ]);


    return(
        <>
        {/* <KeyEvent event1={props.closeNoticeDetailModify}/> */}
        {props.isNoticeDetilModifyOpen && (
            <div className="fixed inset-0 flex items-center justify-center m-10">
            <div className="bg-gray-300 w-full h-5/6 my-auto mx-auto rounded shadow-lg rounded-2xl z-50 relative p-10">
                    <div className="modal-header pb-3 flex justify-between">
                                <input id="title" className="text-2xl font-semibold w-full" defaultValue={props.noticeDetailItem.title}></input>
                            </div>
                            <div className="modal-body bg-white h-5/6 pt-5 pl-2 rounded-3xl">
                                <textarea id="content" className="w-full h-80 bg-white" defaultValue={props.noticeDetailItem.content}></textarea>
                                
                                {props.noticeDetailItem.attached != "" &&
                                <div className="border border-gray-400 border-2">
                                <button className="flex" onClick={()=>{
                                    }}>
                                    <p>첨부파일</p>
                                </button>
                                </div>}
                                
                                <div className='flex justify-center border-gray-200 border-2 mr-2 p-4'>
                                    <button className='flex'><img src={add_note} className='w-10'/><p className='mt-2'>첨부하기</p></button>
                                </div>
                            </div>
                            <div className="modal-footer pt-3 flex justify-between">
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 left-4" onClick={()=>{                                

                                    try{
                                        axios.post(url+"/updateNotice",{id:props.noticeDetailItem.id, title:document.getElementById("title").value, content:document.getElementById("content").value}).then(result=>{
                                            if(result.data === undefined) {
                                                alert("데이터가 없다!!");
                                            }
                                            else{
                                                setNotice({id:"", title:"", content:"", attached:"", created_time:""});
                                                props.toggleUpdatePage();
                                                props.closeNoticeDetailModify();
                                            }
                                        })
                                    }catch(e){
                                        console.log("에러다! : ", e);
                                    }

                                    }}>완료</button>
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 right-4" onClick={props.closeNoticeDetailModify}>
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
        )}
        </>
    )
}



export default NoticeDetailModify;