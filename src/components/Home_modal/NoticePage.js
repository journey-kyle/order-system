import React, { useEffect, useState, Component} from 'react';
import axios from 'axios';
import url, { titleLength, contentLength, lgcontentLength } from '../../fcs/const';
import Notice_Modal from './Notice_Modal';

const NoticePage = (props) => {

    const [notice, setNotice] = useState([
        {
            id:1,
            title:" ",
            content:" ",
            attached:"",
            created_time:" "
        }
    ]);

    useEffect(function(){
        
        try{
            // console.log("login : ", props.login)
            axios.get(url+"/notice",{withCredentials:true}).then(result=>{
                if(result.data === undefined) {
                    alert("데이터가 없다!!");
                }
                else{
                    setNotice(result.data);
                }
            })
        }catch(error){
            alert("에러나따", error);
        }

    },[])

    return(
        <>
        {props.isNoticePageOpen && !props.isNoticeOpen && (
            <div className="fixed inset-0 flex z-50 lg:m-10">
                <div className="modal-container bg-white w-full h-5/6 my-auto mx-auto rounded shadow-lg overflow-y-auto rounded-2xl">
                    <div className="py-4 text-left px-4">
                        <div className="modal-header pb-3 flex justify-between">
                            <h2 className="text-2xl font-semibold">공지사항</h2>
                            <input className="w-1/3 border border-gray-400 border-2 bg-white rounded-lg" placeholder='검색'></input>
                            
                        </div>
                        <div className="modal-body">
                        
                        {notice.map(item => (
                                    <div key={item.id} className="bg-white bg-opacity-50 shadow-md p-4" onClick={()=>{
                                        // alert(item.title);
                                    }}>
                                        <h2 className="text-xl font-semibold">{item.title.length < titleLength ? item.title : item.title.slice(0,titleLength) + "..."}</h2>
                                        <div className="flex justify-between">
                                            <p className="mt-2 text-md hidden lg:block">{item.content.length < contentLength ? item.content : item.content.slice(0,lgcontentLength) + "..."}</p>
                                            <p className="mt-2 text-md lg:hidden">{item.content.length < contentLength ? item.content : item.content.slice(0,contentLength) + "..."}</p>
                                            <p className="mt-2">{
                                            
                                            
                                            new Date(item.created_time).toLocaleString('ko-KR', {
                                                timeZone: 'Asia/Seoul',
                                                year: 'numeric',
                                                month: 'numeric',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric',
                                                second: 'numeric',
                                            }).slice(0,12)
                                            
                                            }</p>
                                        </div>
                                    </div>
                        ))}
                        </div>
                        <div className='flex justify-between mt-80'>
                            {props.userInfo.level == '0' && <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-20" onClick={props.openNoticeModal}>+</button>}
                            <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-20 right-4" onClick={props.closeNoticePage}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        <Notice_Modal isNoticeOpen={props.isNoticeOpen} closeNoticeModal={props.closeNoticeModal}/>
        </>
    )
}



export default NoticePage;