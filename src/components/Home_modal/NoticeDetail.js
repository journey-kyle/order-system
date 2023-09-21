import React, { useEffect, useState, Component, useRef} from 'react';
import axios from 'axios';
import url, { titleLength, contentLength, lgcontentLength } from '../../fcs/const';
import KeyEvent from './KeyEvent';
import x_icon from '../../img/x_icon.png';
import NoticeDetailModify from './NoticeDetailModify';


const NoticeDetail = (props) => {

    const [notice, setNotice] = useState([
        {
            id:1,
            title:" ",
            content:" ",
            attached:"",
            created_time:" "
        }
    ]);

    const [isNoticeDetilModifyOpen, setIsNoticeDetailModifyOpen] = useState(false);

    const openNoticeDetailModify = () => {
        setIsNoticeDetailModifyOpen(true);
    }

    const closeNoticeDetailModify = () => {
        setIsNoticeDetailModifyOpen(false);
    }

    useEffect(function(){

        try{
            // console.log("login : ", props.login)
            axios.post(url+"/reloadNotice", props.noticeDetailItem).then(result=>{
                if(result.data === undefined) {
                    alert("데이터가 없다!!");
                }
                else{
                    props.setNoticeDetailItem(result.data[0]);
                    if((props.isNoticeDetailOpen) && result.data[0].content != null) document.getElementById("contents").value = result.data[0].content;
                }
            })
        }catch(error){
            alert(error);
        }

    },[props.toggleUpdatePage])

    return(
        <>
        
        {/* <KeyEvent event1={props.closeNoticeDetail}/> */}
        
        {props.isNoticeDetailOpen && (
            <div className="fixed inset-0 flex items-center justify-center m-10">
            <div className="bg-red-200 w-full h-5/6 my-auto mx-auto rounded shadow-lg rounded-2xl z-50 relative p-10">
                    <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">{props.noticeDetailItem.title}</h2>
                                <p className="mt-2 lg:block hidden">{
                                                    new Date(props.noticeDetailItem.created_time).toLocaleString('ko-KR', {
                                                    timeZone: 'Asia/Seoul',
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    second: 'numeric',
                                                })}</p>
                            </div>
                            <div className="modal-body bg-white h-5/6 pt-5 pl-2 rounded-3xl">
                                <textarea id="contents" disabled className='w-full h-full h-5/6 resize-none' defaultValue={props.noticeDetailItem.content}></textarea>

                                {props.noticeDetailItem.attached != "" &&
                                <div className="border border-gray-400 border-2">
                                <button className="flex" onClick={()=>{
                                    }}>
                                    <p>{props.noticeDetailItem.attached}</p>
                                </button>
                                </div>}
                            </div>
                            <p className="mt-2 lg:hidden block text-right">{
                                                    new Date(props.noticeDetailItem.created_time).toLocaleString('ko-KR', {
                                                    timeZone: 'Asia/Seoul',
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    second: 'numeric',
                                                })}</p>
                            <div className="modal-footer pt-3 flex justify-between">
                                {!props.userInfo.level && <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 left-4" onClick={()=>{
                                    // props.closeNoticeDetail();
                                    openNoticeDetailModify();
                                    }}>수정</button>}
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 right-4" onClick={()=>{
                                    props.closeNoticeDetail();
                                    props.toggleUpdatePage();
                                }}>
                                    닫기
                                </button>
                                
                            </div>
                            <NoticeDetailModify 
                                isNoticeDetilModifyOpen={isNoticeDetilModifyOpen}
                                closeNoticeDetailModify={closeNoticeDetailModify} 
                                noticeDetailItem={props.noticeDetailItem} 
                                userInfo={props.userInfo}
                                updatePage={props.updatePage}
                                toggleUpdatePage={props.toggleUpdatePage}
                            />
                        </div>
                    </div>
        )}
        </>
    )
}



export default NoticeDetail;