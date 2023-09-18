import React, {useState} from 'react';
import add_note from '../../img/add_note_icon.png';
import KeyEvent from './KeyEvent';
import url from '../../fcs/const';
import axios from 'axios';

const Notice_Modal = (props) =>{

    const [noticeTitle, setNoticeTitle] = useState("");
    const [noticeContent, setNoticeContent] = useState("");
    const [noticeAttached, setNoticeAttached] = useState("");

    return(
        <>
            {/* <KeyEvent event1={props.closeNoticeModal}/> */}
            {props.isNoticeOpen &&(
            <div className="fixed inset-0 flex items-center justify-center z-50 border border-gray-200">
            <div className="modal-overlay absolute w-500 h-1000 bg-gray-500 opacity-20"></div>

            <div className="modal-container bg-white w-full md:max-w-2xl my-auto mx-auto rounded shadow-lg z-50 overflow-y-auto rounded-2xl">
                <div className="py-4 text-left px-4">
                    <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">공지사항 추가</h2>
                                
                            </div>

                            <div className="modal-body">
                                <p>제목</p>
                                <input id="title" className="w-full border border-gray-400 border-2 bg-white" defaultValue={noticeTitle} onChange={(e)=>{
                                    setNoticeTitle(e.target.value);
                                }}></input>
                                <p>내용</p>
                                <textarea id="content" className="w-full h-80 border border-gray-400 border-2 bg-white" defaultValue={noticeContent} onChange={(e)=>{
                                    setNoticeContent(e.target.value);
                                }}></textarea>
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
                                        axios.post(url+"/addNotice",{title:noticeTitle, content:noticeContent, attached:noticeAttached}).then(result=>{
                                            if(result.data === undefined) {
                                                alert("데이터가 없다!!");
                                            }
                                            else{
                                                props.closeNoticeModal();
                                                props.toggleUpdatePage();
                                                setNoticeTitle("");
                                                setNoticeContent("");
                                                setNoticeAttached("");
                                            }
                                        })
                                    }catch(e){
                                        console.log("에러다! : ", e);
                                    }
                                }}>
                                    추가
                                </button>
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded" onClick={()=>{
                                    props.closeNoticeModal();
                                    setNoticeTitle("");
                                    setNoticeContent("");
                                    setNoticeAttached("");
                                }}>
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