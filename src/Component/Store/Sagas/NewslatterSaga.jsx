import {takeEvery,put} from "redux-saga/effects"
import { createNewslatterApi,getNewslatterApi ,updateNewslatterApi,deleteNewslatterApi} from "../Services"
import {ADD_NEWSLATTER,ADD_NEWSLATTER_RED,GET_NEWSLATTER,GET_NEWSLATTER_RED,UPDATE_NEWSLATTER,UPDATE_NEWSLATTER_RED,DELETE_NEWSLATTER,DELETE_NEWSLATTER_RED} from "../Constants"


 function* createNewslatterSaga(action){  
     var response=yield createNewslatterApi(action.payload)   //executor
    yield put({type:ADD_NEWSLATTER_RED,data:response})
}

 function* getNewslatterSaga(){    //executor
    var response=yield getNewslatterApi()
    yield put({type:GET_NEWSLATTER_RED,data:response})
}

function* updateNewslatterSaga(action){   //executor
    var response=yield updateNewslatterApi(action.payload)
    yield put({type:UPDATE_NEWSLATTER_RED,data:response})
}
function* deleteNewslatterSaga(action){    //executor
   yield deleteNewslatterApi(action.payload)
    yield put({type:DELETE_NEWSLATTER_RED,data:action.payload})
}



export function* newslatterSaga(){    //watcher
    yield takeEvery(ADD_NEWSLATTER,createNewslatterSaga)
    yield takeEvery(GET_NEWSLATTER,getNewslatterSaga)
    yield takeEvery(UPDATE_NEWSLATTER,updateNewslatterSaga)
    yield takeEvery(DELETE_NEWSLATTER,deleteNewslatterSaga)
}