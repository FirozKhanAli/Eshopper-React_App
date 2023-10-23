import {takeEvery,put} from "redux-saga/effects"
import { createCheckoutApi,getCheckoutApi ,updateCheckoutApi,deleteCheckoutApi} from "../Services"
import {ADD_CHECKOUT,ADD_CHECKOUT_RED,GET_CHECKOUT,GET_CHECKOUT_RED,UPDATE_CHECKOUT,UPDATE_CHECKOUT_RED,DELETE_CHECKOUT,DELETE_CHECKOUT_RED} from "../Constants"


 function* createCheckoutSaga(action){  
     var response=yield createCheckoutApi(action.payload)   //executor
    yield put({type:ADD_CHECKOUT_RED,data:response})
}

 function* getCheckoutSaga(){    //executor
    var response=yield getCheckoutApi()
    yield put({type:GET_CHECKOUT_RED,data:response})
}

function* updateCheckoutSaga(action){   //executor
    var response=yield updateCheckoutApi(action.payload)
    yield put({type:UPDATE_CHECKOUT_RED,data:response})
}
function* deleteCheckoutSaga(action){    //executor
   yield deleteCheckoutApi(action.payload)
    yield put({type:DELETE_CHECKOUT_RED,data:action.payload})
}



export function* checkoutSaga(){    //watcher
    yield takeEvery(ADD_CHECKOUT,createCheckoutSaga)
    yield takeEvery(GET_CHECKOUT,getCheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT,updateCheckoutSaga)
    yield takeEvery(DELETE_CHECKOUT,deleteCheckoutSaga)
}