import React, {Component} from 'react';


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
                    console.log(e);
                }
                
            }
        }

        handleEnterKey = (e) => {
            if(e.key === 'Enter') {
                try{
                    console.log("나 엔터키 누름");
                }catch(e){
                    console.log(e);
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