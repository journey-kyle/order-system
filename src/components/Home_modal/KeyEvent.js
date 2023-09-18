import React, {Component, useState} from 'react';


const KeyEvent = (props) => {
    
    class Key_Event extends Component{

        componentDidMount() {
            document.addEventListener('keydown', this.handleEscKey, false);
        }
    
        componentWillUnmount() {
            document.removeEventListener('keydown', this.handleEscKey, false);
        } 

        
    
        handleEscKey = (e) => {
            if (e.key === 'Escape') {
                // ESC 키가 눌렸을 때 모달을 닫는 동작을 여기에 추가하세요.
                try{
                    props.event1();
                }catch(e){
                    // console.log("에러다!!", e);
                }
                
            }
        }

        render(){
            return;
        }
    }
    return(
        <>
            <Key_Event/>
        </>
    )
}

export default KeyEvent;