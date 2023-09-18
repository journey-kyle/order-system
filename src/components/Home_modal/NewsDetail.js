import React, { useEffect, useState, Component, useRef} from 'react';
import axios from 'axios';
import url, { titleLength, contentLength, lgcontentLength } from '../../fcs/const';
import KeyEvent from './KeyEvent';
import x_icon from '../../img/x_icon.png';
import NewsDetailModify from './NewsDetailModify';


const NewsDetail = (props) => {

    const [news, setNews] = useState([
        {
            id:1,
            title:" ",
            content:" ",
            attached:"",
            created_time:" "
        }
    ]);

    const [isNewsDetilModifyOpen, setIsNewsDetailModifyOpen] = useState(false);

    const openNewsDetailModify = () => {
        setIsNewsDetailModifyOpen(true);
    }

    const closeNewsDetailModify = () => {
        setIsNewsDetailModifyOpen(false);
    }

    useEffect(function(){

        try{
            // console.log("login : ", props.login)
            axios.post(url+"/reloadNews", props.newsDetailItem).then(result=>{
                if(result.data === undefined) {
                    alert("데이터가 없다!!");
                }
                else{
                    props.setNewsDetailItem(result.data[0]);
                    if((props.isNewsDetailOpen) && result.data[0].content != null) document.getElementById("contents").value = result.data[0].content;
                }
            })
        }catch(error){
            alert(error);
        }

    },[props.toggleUpdatePage])

    return(
        <>
        
        {/* <KeyEvent event1={props.closeNewsDetail}/> */}
        
        {props.isNewsDetailOpen && (
            <div className="fixed inset-0 flex items-center justify-center m-10">
            <div className="bg-red-200 w-full h-5/6 my-auto mx-auto rounded shadow-lg rounded-2xl z-50 relative p-10">
                    <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">{props.newsDetailItem.title}</h2>
                                <p className="mt-2 lg:block hidden">{
                                                    new Date(props.newsDetailItem.created_time).toLocaleString('ko-KR', {
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
                                <textarea id="contents" disabled className='w-full h-80 h-5/6 resize-none' defaultValue={props.newsDetailItem.content}></textarea>

                                {props.newsDetailItem.attached != "" &&
                                <div className="border border-gray-400 border-2">
                                <button className="flex" onClick={()=>{
                                    }}>
                                    <p>{props.newsDetailItem.attached}</p>
                                </button>
                                </div>}
                            </div>
                            <p className="mt-2 lg:hidden block text-right">{
                                                    new Date(props.newsDetailItem.created_time).toLocaleString('ko-KR', {
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
                                    // props.closeNewsDetail();
                                    openNewsDetailModify();
                                    }}>수정</button>}
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-2 right-4" onClick={()=>{
                                    props.closeNewsDetail();
                                    props.toggleUpdatePage();
                                }}>
                                    닫기
                                </button>
                                
                            </div>
                            <NewsDetailModify 
                                isNewsDetilModifyOpen={isNewsDetilModifyOpen}
                                closeNewsDetailModify={closeNewsDetailModify} 
                                newsDetailItem={props.newsDetailItem} 
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



export default NewsDetail;