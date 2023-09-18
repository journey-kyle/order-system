import React, { useEffect, useState, Component, useRef} from 'react';
import axios from 'axios';
import url, { titleLength, contentLength, lgcontentLength } from '../../fcs/const';
import News_Modal from './News_Modal';
import KeyEvent from './KeyEvent';
import x_icon from '../../img/x_icon.png';
import NewsDetail from './NewsDetail';
import { getElementError } from '@testing-library/react';


const NewsPage = (props) => {

    const [news, setNews] = useState([
        {
            id:1,
            title:" ",
            content:" ",
            attached:"",
            created_time:" "
        }
    ]);

    const [highScroll, setHighScroll] = useState(0);

    useEffect(function(){

        try{
            // console.log("login : ", props.login)
            axios.get(url+"/news",{withCredentials:true}).then(result=>{
                if(result.data === undefined) {
                    alert("데이터가 없다!!");
                }
                else{
                    setNews(result.data);
                }
            })
        }catch(error){
            alert("에러나따", error);
        }

        if(props.isNewsPageOpen && document.getElementById("list") != null) document.getElementById("list").scrollTop = highScroll;

    },[props.updatePage])

    const [isNewsDetailOpen, setIsNewsDetailOpen] = useState(false);

    const openNewsDetail = () =>{
        setIsNewsDetailOpen(true);
    };

    const closeNewsDetail = () =>{
        setIsNewsDetailOpen(false);
    };

    const [newsDetailItem, setNewsDetailItem] = useState({id:"39",title:"",content:"",attached:"",created_time:""});


    return(
        <>
        <NewsDetail 
            isNewsDetailOpen={isNewsDetailOpen} 
            closeNewsDetail={closeNewsDetail} 
            userInfo={props.userInfo} 
            newsDetailItem={newsDetailItem} 
            openNewsModal={props.openNewsModal}
            updatePage={props.updatePage}
            toggleUpdatePage={props.toggleUpdatePage}
            setNewsDetailItem={setNewsDetailItem}
        />
        {/* <KeyEvent event1={props.closeNewsPage}/> */}
        {props.isNewsPageOpen && !props.isNewsOpen && !isNewsDetailOpen && (
            <div className="fixed inset-0 flex lg:m-10">
                <div className="modal-container bg-red-200 w-full h-5/6 my-auto mx-auto rounded shadow-lg rounded-2xl z-50">
                    <div className="py-4 text-left px-4 h-screen flex flex-col">
                        <div className="modal-header pb-3 flex justify-between absolute top-30">
                            <h2 className="text-2xl font-semibold">공지사항</h2>
                            <input className="w-1/2 border border-gray-400 border-2 bg-white rounded-lg" placeholder='검색'></input>
                            
                        </div>
                        <div className="modal-body mt-16 flex-grow overflow-y-auto rounded-2xl" id="list" name="listt">
                        {news.length && news.map(item => (
                                    <div key={item.id} className="bg-white bg-opacity-50 shadow-md p-4 flex justify-between">
                                        <div className="w-5/6" onClick={()=>{
                                            setHighScroll(document.getElementById("list").scrollTop);
                                            setNewsDetailItem(item);
                                            openNewsDetail();
                                        }}>
                                            <h2 className="text-xl font-semibold">{item.title.length < titleLength ? item.title : item.title.slice(0,titleLength) + "..."}</h2>
                                            <p className="mt-2 text-md hidden lg:block">{item.content.length < contentLength ? item.content : item.content.slice(0,lgcontentLength) + "..."}</p>
                                            <p className="mt-2 text-md lg:hidden">{item.content.length < contentLength ? item.content : item.content.slice(0,contentLength) + "..."}</p>
                                        </div>
                                        <div>
                                            <div className='flex justify-between mx-auto'>
                                                {props.userInfo.level == '0' && <button onClick={()=>{
                                                    let del_news = window.confirm("이 공지사항을 삭제 하시겠습니까?");
                                                    if(del_news){
                                                        try{
                                                            // console.log("login : ", props.login)
                                                            axios.post(url+"/deleteNews",{id:item.id}).then(result=>{
                                                                if(result.data === undefined) {
                                                                    alert("Data is undefined");
                                                                }
                                                                else{
                                                                    props.toggleUpdatePage();
                                                                }
                                                            })
                                                        }catch(error){
                                                            alert("에러", error);
                                                        }
                                                    }
                                                }}><img src={x_icon} className='w-4'/></button>}
                                            </div>

                                            <div className="flex justify-between">
                                                <p className="mt-2">{
                                                    new Date(item.created_time).toLocaleString('ko-KR', {
                                                    timeZone: 'Asia/Seoul',
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    second: 'numeric',
                                                }).slice(0,12)}</p>
                                            </div>
                                        </div>
                                    </div>
                        ))}
                        </div>
                        <div className='flex justify-between mt-80'>
                            {props.userInfo.level == '0' && <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-20" onClick={props.openNewsModal}>추가</button>}
                            <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded absolute bottom-20 right-4" onClick={props.closeNewsPage}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {/* <News_Modal isNewsOpen={props.isNewsOpen} closeNewsModal={props.closeNewsModal}/> */}
        </>
    )
}



export default NewsPage;