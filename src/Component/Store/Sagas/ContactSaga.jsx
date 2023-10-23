import {takeEvery,put} from "redux-saga/effects"
import { createContactApi,getContactApi ,updateContactApi,deleteContactApi} from "../Services"
import {ADD_CONTACT,ADD_CONTACT_RED,GET_CONTACT,GET_CONTACT_RED,UPDATE_CONTACT,UPDATE_CONTACT_RED,DELETE_CONTACT,DELETE_CONTACT_RED} from "../Constants"


 function* createContactSaga(action){  
     var response=yield createContactApi(action.payload)   //executor
    yield put({type:ADD_CONTACT_RED,data:response})
}

 function* getContactSaga(){    //executor
    var response=yield getContactApi()
    yield put({type:GET_CONTACT_RED,data:response})
}

function* updateContactSaga(action){   //executor
    var response=yield updateContactApi(action.payload)
    yield put({type:UPDATE_CONTACT_RED,data:response})
}
function* deleteContactSaga(action){    //executor
   yield deleteContactApi(action.payload)
    yield put({type:DELETE_CONTACT_RED,data:action.payload})
}



export function* contactSaga(){    //watcher
    yield takeEvery(ADD_CONTACT,createContactSaga)
    yield takeEvery(GET_CONTACT,getContactSaga)
    yield takeEvery(UPDATE_CONTACT,updateContactSaga)
    yield takeEvery(DELETE_CONTACT,deleteContactSaga)
}