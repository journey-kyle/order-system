import React, { useEffect, useState } from 'react';
import main_bg from '../img/main_bg.PNG';
import { Link } from 'react-router-dom';
import url, { titleLength, contentLength } from '../fcs/const';
import Footer from './Footer';
import axios from 'axios';
import add_note from '../img/add_note_icon.png';

const Home = (props) => {



    const notices = [
        { id: 1, title: '공지사항 Database에서 정보를 불러오고 있습니다.', content: '공지사항은 공지사항 database에서 스크롤을 내릴 때마다 업데이트 되도록 만들려고 합니다. 많은 협조 바랍니다.' },
        { id: 2, title: '환영합니다. 공지사항 페이지가 개설되었습니다.', content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        { id: 3, title: '환영합니다. 공지사항 페이지가 개설되었습니다.', content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        { id: 4, title: '환영합니다. 공지사항 페이지가 개설되었습니다.', content: '공지사항 페이지가 생성되었습니다. 평소에 공지를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ];
    const news = [
        { id: 1, title: 'NEWS Database에서 정보를 불러오고 있습니다.', content: 'NEWS는 NEWS database에서 스크롤을 내릴 때마다 업데이트 되도록 만들려고 합니다. 많은 협조 바랍니다.' },
        { id: 2, title: '환영합니다. NEWS 페이지가 개설되었습니다.', content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        { id: 3, title: '환영합니다. NEWS 페이지가 개설되었습니다.', content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        { id: 4, title: '환영합니다. NEWS 페이지가 개설되었습니다.', content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        { id: 5, title: '환영합니다. NEWS 페이지가 개설되었습니다.', content: 'NEWS 페이지가 생성되었습니다. 평소에 NEWS를 잘 확인하시고, 놓치는 일이 없도록 하시기 바랍니다.' },
        // 필요한 만큼 공지사항 데이터를 추가합니다.
    ];

    const [notice_data, setNotice_data] = useState("");
    useEffect(function () {

        axios.get(url + "/notice", { withCredentials: true }).then(result => {
            setNotice_data(result.data);
            // console.log("console data : ", result.data);
        });

    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
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
                                {props.userInfo.level == 0 && (<button className='text-white font-bold' onClick={openModal}>공지사항 추가</button>)}
                                <Link to=""><p className="text-lg mb-4 text-white mt-2">{"<"}더보기{">"}</p></Link>
                            </div>
                            <div className="grid">
                                {notices.map((notice) => (
                                    <div key={notice.id} className="bg-white bg-opacity-50 shadow-md p-4">
                                        <h2 className="text-xl font-semibold">{notice.title.length < titleLength ? notice.title : notice.title.slice(0, titleLength) + "..."}</h2>
                                        <p className="mt-2 text-md">{notice.content.length < contentLength ? notice.content : notice.content.slice(0, contentLength) + "..."}</p>
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
                                <Link to=""><p className="text-lg mb-4 text-white mt-2">{"<"}더보기{">"}</p></Link>
                            </div>
                            <div className="grid">
                                {news.map((news) => (
                                    <div key={news.id} className="bg-white bg-opacity-50 shadow-md p-4">
                                        <h2 className="text-xl font-semibold">{news.title.length < titleLength ? news.title : news.title.slice(0, titleLength) + "..."}</h2>
                                        <p className="mt-2 text-md">{news.content.length < contentLength ? news.content : news.content.slice(0, contentLength) + "..."}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}


            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay absolute w-500 h-1000 bg-gray-500 opacity-20"></div>

                    <div className="modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto rounded-2xl">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">공지사항 추가</h2>
                                <button className="flex"><img src={add_note} className="w-10"/></button>
                            </div>

                            <div className="modal-body">
                                <o>제목</o>
                                <input className="w-full border border-blue-500 bg-white"></input>
                                <p>내용</p>
                                <textarea className="w-full h-40 border border-blue-500 bg-white"></textarea>
                            </div>

                            <div className="modal-footer pt-3">
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                                    추가
                                </button>
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded" onClick={closeModal}>
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

export default Home;