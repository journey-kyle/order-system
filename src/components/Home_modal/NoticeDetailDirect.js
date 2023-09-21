import React, { useEffect, useState, Component, useRef} from 'react';
import axios from 'axios';
import url, { titleLength, contentLength, lgcontentLength } from '../../fcs/const';
import KeyEvent from './KeyEvent';
import x_icon from '../../img/x_icon.png';
import NoticeDetailModify from './NoticeDetailModify';
import { useDispatch, useSelector } from 'react-redux';
import {toggleNoticeModal, 
    toggleNoticePage, 
    toggleNoticeDetail, 
    toggleNoticeDetailModify,
    toggleNewsModal, 
    toggleNewsPage, 
    toggleNewsDetail, 
    toggleNewsDetailModify,
    toggleUpdatePage,
    setUserInfo,
    setNoticeDetailItem,
} from '../../store/store';

const NoticeDetailDirect = (props) => {

    let dispatch = useDispatch();

    const homeModalState = useSelector((state)=>{
        return state.homeModalState;
    })

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
            axios.post(url+"/reloadNotice", homeModalState.noticeDetailItem).then(result=>{
                if(result.data === undefined) {
                    alert("데이터가 없다!!");
                }
                else{
                    dispatch(setNoticeDetailItem(result.data[0]));
                    if((homeModalState.isNoticeDetailOpen) && result.data[0].content != null) document.getElementById("contents").value = result.data[0].content;
                }
            })
        }catch(error){
            alert(error);
        }

    },[homeModalState.toggleUpdatePage])

    return(
        <>
        
        {/* <KeyEvent event1={props.closeNoticeDetail}/> */}
        
        {homeModalState.isNoticeDetailOpen && (
            <div className="fixed inset-0 flex items-center justify-center m-10">
            <div className="bg-red-200 w-full h-5/6 my-auto mx-auto rounded shadow-lg rounded-2xl z-50 relative p-10">
                    <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">{homeModalState.noticeDetailItem.title}</h2>
                                <p className="mt-2 lg:block hidden">{
                                                    new Date(homeModalState.noticeDetailItem.created_time).toLocaleString('ko-KR', {
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
                                <textarea id="contents" disabled className='w-full h-80 h-5/6 resize-none' defaultValue={homeModalState.noticeDetailItem.content}></textarea>

                                {homeModalState.noticeDetailItem.attached != "" &&
                                <div className="border border-gray-400 border-2">
                                <button className="flex" onClick={()=>{
                                    }}>
                                    <p>{homeModalState.noticeDetailItem.attached}</p>
                                </button>
                                </div>}
                            </div>
                            <p className="mt-2 lg:hidden block text-right">{
                                                    new Date(homeModalState.noticeDetailItem.created_time).toLocaleString('ko-KR', {
                                                    timeZone: 'Asia/Seoul',
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    second: 'numeric',
                                                })}</p>
                            <div className="modal-footer pt-3 flex justify-between">
                                {!homeModalState.userInfo.level && <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 left-4" onClick={()=>{
                                    // homeModalState.closeNoticeDetail();
                                    openNoticeDetailModify();
                                    }}>수정</button>}
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 right-4" onClick={()=>{
                                    dispatch(toggleNoticeDetail());
                                    dispatch(toggleUpdatePage());
                                }}>
                                    닫기
                                </button>
                            </div>
                            <NoticeDetailModify 
                                isNoticeDetilModifyOpen={homeModalState.isNoticeDetilModifyOpen}
                                closeNoticeDetailModify={homeModalState.toggleNoticeDetailModify} 
                                noticeDetailItem={homeModalState.noticeDetailItem} 
                                userInfo={homeModalState.userInfo}
                                updatePage={homeModalState.updatePage}
                                toggleUpdatePage={homeModalState.toggleUpdatePage}
                            />
                        </div>
                    </div>
        )}
        </>
    )
}



export default NoticeDetailDirect;