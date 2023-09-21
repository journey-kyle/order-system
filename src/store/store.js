import {configureStore, createSlice, current} from '@reduxjs/toolkit'

let initialState = {
    isNoticeOpen:false, 
    isNoticePageOpen:false, 
    isNoticeDetailOpen:false, 
    isNoticeDetailModifyOpen:false,
    isNewsOpen:false, 
    isNewsPageOpen:false, 
    isNewsDetailOpen:false, 
    isNewsDetailModifyOpen:false,
    updatePage:true,
    userInfo:{id:"", name:"", email:"",branch:"",level:"",},
    noticeDetailItem:{id:"",title:"",content:"", attached:"", created_time:""}
}

let homeModalState = createSlice({
    name:'modalState',
    initialState,
    reducers:{
        toggleNoticeModal(state){
            if(state.isNoticeOpen) state.isNoticeOpen = false;
            else state.isNoticeOpen = true;
        },
        toggleNoticePage(state){
            if(state.isNoticePageOpen) state.isNoticePageOpen = false;
            else state.isNoticePageOpen = true;
        },
        toggleNoticeDetail(state){
            if(state.isNoticeDetailOpen) state.isNoticeDetailOpen = false;
            else state.isNoticeDetailOpen = true;
        },
        toggleNoticeDetailModify(state){
            if(state.isNoticeDetailModifyOpen) state.isNoticeDetailModifyOpen = false;
            else state.isNoticeDetailModifyOpen = true;
        },
        toggleNewsModal(state){
            if(state.isNewsOpen) state.isNewsOpen = false;
            else state.isNewsOpen = true;
        },
        toggleNewsPage(state){
            if(state.isNewsPageOpen) state.isNewsPageOpen = false;
            else state.isNewsPageOpen = true;
        },
        toggleNewsDetail(state){
            if(state.isNewsDetailOpen) state.isNewsDetailOpen = false;
            else state.isNewsDetailOpen = true;
        },
        toggleNewsDetailModify(state){
            if(state.isNewsDetailModifyOpen) state.isNewsDetailModifyOpen = false;
            else state.isNewsDetailModifyOpen = true;
        },
        toggleUpdatePage(state){
            if(state.updatePage) state.updatePage = false;
            else state.updatePage = true;
        },
        setUserInfo(state,action){
            state.userInfo = action.payload;
        },
        setNoticeDetailItem(state,action){
            state.noticeDetailItem = action.payload;
        }
        
    }
})

export let {toggleNoticeModal, 
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
        } = homeModalState.actions


export default configureStore({
    reducer:{
        homeModalState : homeModalState.reducer
    }
})