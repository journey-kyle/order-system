import React, { useEffect, useState, Component} from 'react';
import main_bg from '../img/main_bg.PNG';
import { Link } from 'react-router-dom';
import url, { titleLength, contentLength, lgcontentLength } from '../fcs/const';
import axios from 'axios';
import News_Modal from './Home_modal/News_Modal';
import Notice_Modal from './Home_modal/Notice_Modal';
import NewsPage from './Home_modal/NewsPage';
import NoticePage from './Home_modal/NoticePage';
import NoticeDetailDirect from './Home_modal/NoticeDetailDirect';

// import value from '../fcs/values';

const Home = (props) => {

    

    const [notices,setNotices] = useState([
        { id: 1,
            title: '공지사항 서버와 통신이 원활하지 않습니다.', 
            content: '공지사항 서버와 통신이 원활하지 않습니다.',
            created_time: Date()
        }
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ]);

    const [news,setNews] = useState([
        { id: 1, 
            title: 'NEWS 서버와 통신이 원활하지 않습니다.', 
            content: 'NEWS 서버와 통신이 원활하지 않습니다.', 
            created_time : Date()
        }
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ]);


    const [updatePage, setUpdatePage] = useState(true);

    const [newData, setNewData] = useState({id:""});
    
    useEffect(function () {

        axios.get(url + "/notice", { withCredentials: true }).then(result => {
            if(result.data.length === 0) {
                console.log("데이터가 없습니다.");
            }else {
                // setNotices(result.data);
                if(result.data.length < 6)
                {
                    setNotices(result.data);
                }else{
                    
                    setNotices([result.data[0], result.data[1], result.data[2], result.data[3], result.data[4], result.data[5]]);
                }
            }
        });
        axios.get(url + "/news", { withCredentials: true }).then(result => {
            if(result.data.length === 0) {
                console.log("데이터가 없습니다.");
            }else {
                // setNotices(result.data);
                if(result.data.length < 6)
                {
                    setNews(result.data);
                }else{
                    
                    setNews([result.data[0], result.data[1], result.data[2], result.data[3], result.data[4], result.data[5]]);
                }
            }
        });

    }, [updatePage]);

    const [isNoticeOpen, setIsNoticeOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);
    const [isNoticePageOpen, setIsNoticePageOpen] = useState(false);
    const [isNewsPageOpen, setIsNewsPageOpen] = useState(false);
    const [isNoticeDetailDirectOpen, setIsNoticeDetailDirectOpen] = useState(false);
    const [noticeDetailDirectItem, setNoticeDetailDirectItem] = useState({id:"",title:"",content:"",attached:"",created_time:""});

    const openNoticeDetailDirect = () => {
        setIsNoticeDetailDirectOpen(true);
    };

    const closeNoticeDetailDirect = () => {
        setIsNoticeDetailDirectOpen(false);
    };
    
    const openNoticeModal = () => {
        setIsNoticeOpen(true);
    };

    const closeNoticeModal = () => {
        setIsNoticeOpen(false);
    };

    const openNewsModal = () => {
        setIsNewsOpen(true);
    };

    const closeNewsModal = () => {
        setIsNewsOpen(false);
    };

    const openNoticePage = () => {
        setIsNoticePageOpen(true);
    };

    const closeNoticePage = () => {
        setIsNoticePageOpen(false);
    };

    const openNewsPage = () => {
        setIsNewsPageOpen(true);
    };

    const closeNewsPage = () => {
        setIsNewsPageOpen(false);
    };

    const toggleUpdatePage = () => {
        if(updatePage) setUpdatePage(false);
        else setUpdatePage(true);
    }

    return (
        <>
            <div className="relative overflow-y-auto lg:min-h-screen">
                <div className="fixed inset-0 z-0 overflow-y-auto top-10"
                    style={{ backgroundImage: `url(${main_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className="py-20 relative z-5 top-20 w-full h-full">
                    <div className="container mx-auto py-6 lg:flex">
                        <div className='m-4 mx-auto'>
                            <div className='flex justify-between'>
                                <h1 className="text-2xl font-bold mb-4 text-white">공지사항</h1>
                                {props.userInfo.level == 0 && (<button className='text-white mb-4 font-bold' onClick={openNoticeModal}>공지사항 추가</button>)}
                                <button onClick={openNoticePage}><p className="text-lg text-white mb-4">{"<"}더보기{">"}</p></button>
                            </div>
                            <div className="grid">
                                {notices.length && notices.map((item) => (
                                    <div key={item.id} className="bg-white bg-opacity-50 shadow-md p-4 rounded-md" onClick={()=>{
                                        setNoticeDetailDirectItem(item);
                                        openNoticeDetailDirect();
                                    }}>
                                        <h2 className="text-xl font-semibold">{item.title.length < titleLength ? item.title : item.title.slice(0, titleLength) + "..."}</h2>
                                        <div className="flex justify-between">
                                            <p className="mt-2 text-md">{item.content.length < contentLength ? item.content : item.content.slice(0, contentLength) + "..."}</p>
                                            <p className="mt-2 pl-21 lg:pl-20">{
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
                                            {/* <p>{isNoticePageOpen && (<p>냠</p>)}</p> */}
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* </div>
                    <div className="container mx-auto p-4 flex"> */}
                        <br />
                        <br />
                        <div className='m-4 mx-auto'>
                            <div className='flex justify-between'>
                                <h1 className="text-2xl font-bold mb-4 text-white">NEWS</h1>
                                {props.userInfo.level == 0 && (<button className='text-white mb-4 font-bold' onClick={openNewsModal}>NEWS 추가</button>)}
                                <button onClick={openNewsPage}><p className="text-lg text-white mb-4">{"<"}더보기{">"}</p></button>
                            </div>
                            <div className="grid">
                                {news.length && news.map((item) => (
                                    <div key={item.id} className="bg-white bg-opacity-50 shadow-md p-4">
                                        <h2 className="text-xl font-semibold">{item.title.length < titleLength ? item.title : item.title.slice(0, titleLength) + "..."}</h2>
                                        <div className="flex justify-between">
                                            <p className="mt-2 text-md">{item.content.length < contentLength ? item.content : item.content.slice(0, contentLength) + "..."}</p>
                                            <p className="mt-2 pl-21 lg:pl-20">{
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
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}

            <News_Modal isNewsOpen={isNewsOpen}
                        closeNewsModal={closeNewsModal} 
                        updatePage={updatePage}
                        toggleUpdatePage={toggleUpdatePage}/>
            <Notice_Modal isNoticeOpen={isNoticeOpen}
                            closeNoticeModal={closeNoticeModal}
                            updatePage={updatePage}
                            toggleUpdatePage={toggleUpdatePage}/>
            <NewsPage isNewsPageOpen={isNewsPageOpen} 
                        closeNewsPage={closeNewsPage} 
                        isNewsOpen={isNewsOpen} 
                        closeNewsModal={closeNewsModal} 
                        openNewsModal={openNewsModal} 
                        userInfo={props.userInfo}
                        updatePage={updatePage}
                        toggleUpdatePage={toggleUpdatePage}/>
            <NoticePage isNoticePageOpen={isNoticePageOpen} 
                        closeNoticePage={closeNoticePage} 
                        isNoticeOpen={isNoticeOpen} 
                        closeNoticeModal={closeNoticeModal} 
                        openNoticeModal={openNoticeModal} 
                        userInfo={props.userInfo}
                        updatePage={updatePage}
                        toggleUpdatePage={toggleUpdatePage}/>
        </>
    )
}

export default Home;