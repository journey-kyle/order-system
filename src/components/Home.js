import React, { useEffect, useState, Component} from 'react';
import main_bg from '../img/main_bg.PNG';
import { Link } from 'react-router-dom';
import url, { titleLength, contentLength, lgcontentLength } from '../fcs/const';
import axios from 'axios';
import News_Modal from './Home_modal/News_Modal';
import Notice_Modal from './Home_modal/Notice_Modal';
import NewsPage from './Home_modal/NewsPage';
import NoticePage from './Home_modal/NoticePage';

const Home = (props) => {



    const [notices,setNotices] = useState([
        { id: 1,
            title: '공지사항 Database에서 정보를 불러오고 있습니다.', 
            content: '공지사항은 공지사항 database에서 스크롤을 내릴 때마다 업데이트 되도록 만들려고 합니다. 많은 협조 바랍니다.',
            created_time: '2023.08.14'
        },
        { id: 2,
            title: '환영합니다. 공지사항 페이지가 개설되었습니다.',
            content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.',
            created_time: '2023.07.03'
        },
        { id: 3, 
            title: '환영합니다. 공지사항 페이지가 개설되었습니다.', 
            content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.', 
            created_time: '2023.06.29'
        },
        { id: 4, 
            title: '환영합니다. 공지사항 페이지가 개설되었습니다.', 
            content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.', 
            created_time: '2023.06.22'
        },
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ]);

    const [news,setNews] = useState([
        { id: 1, 
            title: 'NEWS Database에서 정보를 불러오고 있습니다.', 
            content: 'NEWS는 NEWS database에서 스크롤을 내릴 때마다 업데이트 되도록 만들려고 합니다. 많은 협조 바랍니다.', 
            created_time : '2023.09.04'
        },
        { id: 2, 
            title: '환영합니다. NEWS 페이지가 개설되었습니다.', 
            content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.', 
            created_time: '2023.08.31'
        },
        { id: 3, 
            title: '환영합니다. NEWS 페이지가 개설되었습니다.', 
            content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.', 
            created_time: '2023.08.01'
        },
        { id: 4, 
            title: '환영합니다. NEWS 페이지가 개설되었습니다.', 
            content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.', 
            created_time: '2023.07.23'
        },
        { id: 5, 
            title: '환영합니다. NEWS 페이지가 개설되었습니다.', 
            content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.', 
            created_time: '2023.06.05'
        },
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ]);

    useEffect(function () {

        axios.get(url + "/notice", { withCredentials: true }).then(result => {
            setNotices(result.data);
            // console.log("console data : ", result.data);
        });
        axios.get(url + "/news", { withCredentials: true }).then(result => {
            setNews(result.data);
            // console.log("console data : ", result.data);
        });

    }, []);


    const [isNoticeOpen, setIsNoticeOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);
    const [isNoticePageOpen, setIsNoticePageOpen] = useState(false);
    const [isNewsPageOpen, setIsNewsPageOpen] = useState(false);
    
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

    return (
        <>
            <div className="relative overflow-auto lg:min-h-screen">
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
                                {notices.map((item) => (
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
                                {news.map((item) => (
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

            <News_Modal isNewsOpen={isNewsOpen} closeNewsModal={closeNewsModal}/>
            <Notice_Modal isNoticeOpen={isNoticeOpen} closeNoticeModal={closeNoticeModal}/>
            <NewsPage isNewsPageOpen={isNewsPageOpen} closeNewsPage={closeNewsPage} isNewsOpen={isNewsOpen} closeNewsModal={closeNewsModal} openNewsModal={openNewsModal} userInfo={props.userInfo}/>
            <NoticePage isNoticePageOpen={isNoticePageOpen} closeNoticePage={closeNoticePage} isNoticeOpen={isNoticeOpen} closeNoticeModal={closeNoticeModal} openNoticeModal={openNoticeModal} userInfo={props.userInfo}/>
        </>
    )
}

export default Home;