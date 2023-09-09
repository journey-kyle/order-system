import React, { useEffect, useState, Component} from 'react';
import add_note from '../../img/add_note_icon.png';
import KeyEvent from './KeyEvent';

const News_Modal = (props) =>{

    return(
        <>
            <KeyEvent event1={props.closeNewsModal}/>
            {props.isNewsOpen &&(
            <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay absolute w-500 h-1000 bg-gray-500 opacity-20"></div>

                    <div className="modal-container bg-white w-full md:max-w-2xl my-auto mx-auto rounded shadow-lg z-50 overflow-y-auto rounded-2xl">
                        <div className="py-4 text-left px-4">
                            <div className="modal-header pb-3 flex justify-between">
                                <h2 className="text-2xl font-semibold">NEWS 추가</h2>
                                
                            </div>

                            <div className="modal-body">
                                <p>제목</p>
                                <input className="w-full border border-gray-400 border-2 bg-white"></input>
                                <p>내용</p>
                                <textarea className="w-full h-80 border border-gray-400 border-2 bg-white"></textarea>
                                <div className="border border-gray-400 border-2 p-6 flex justify-center">
                                    <button className="flex" onClick={()=>{
                                        
                                    }}>
                                        <img src={add_note} className="w-10"/>
                                        <p className="mt-2 ml-4">파일 첨부</p>
                                    </button>
                                    
                                </div>
                            </div>

                            <div className="modal-footer pt-3 flex justify-between">
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                                    추가
                                </button>
                                <button className="modal-close px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded" onClick={props.closeNewsModal}>
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

export default News_Modal;