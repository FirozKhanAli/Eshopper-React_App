import {takeEvery,put} from "redux-saga/effects"
import { createUserApi,getUserApi ,updateUserApi,deleteUserApi} from "../Services"
import {ADD_USER,ADD_USER_RED,GET_USER,GET_USER_RED,UPDATE_USER,UPDATE_USER_RED,DELETE_USER,DELETE_USER_RED} from "../Constants"


 function* createUserSaga(action){  
     var response=yield createUserApi(action.payload)   //executor
    yield put({type:ADD_USER_RED,data:response})
}

 function* getUserSaga(){    //executor
    var response=yield getUserApi()
    yield put({type:GET_USER_RED,data:response})
}

function* updateUserSaga(action){   //executor
    var response=yield updateUserApi(action.payload)
    yield put({type:UPDATE_USER_RED,data:response})
}
function* deleteUserSaga(action){    //executor
   yield deleteUserApi(action.payload)
    yield put({type:DELETE_USER_RED,data:action.payload})
}



export function* userSaga(){    //watcher
    yield takeEvery(ADD_USER,createUserSaga)
    yield takeEvery(GET_USER,getUserSaga)
    yield takeEvery(UPDATE_USER,updateUserSaga)
    yield takeEvery(DELETE_USER,deleteUserSaga)
}