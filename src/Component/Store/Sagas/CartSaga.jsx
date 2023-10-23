import {takeEvery,put} from "redux-saga/effects"
import { createCartApi,getCartApi ,updateCartApi,deleteCartApi} from "../Services"
import {ADD_CART,ADD_CART_RED,GET_CART,GET_CART_RED,UPDATE_CART,UPDATE_CART_RED,DELETE_CART,DELETE_CART_RED} from "../Constants"


 function* createCartSaga(action){  
     var response=yield createCartApi(action.payload)   //executor
    yield put({type:ADD_CART_RED,data:response})
}

 function* getCartSaga(){    //executor
    var response=yield getCartApi()
    yield put({type:GET_CART_RED,data:response})
}

function* updateCartSaga(action){   //executor
    var response=yield updateCartApi(action.payload)
    yield put({type:UPDATE_CART_RED,data:response})
}
function* deleteCartSaga(action){    //executor
   yield deleteCartApi(action.payload)
    yield put({type:DELETE_CART_RED,data:action.payload})
}



export function* cartSaga(){    //watcher
    yield takeEvery(ADD_CART,createCartSaga)
    yield takeEvery(GET_CART,getCartSaga)
    yield takeEvery(UPDATE_CART,updateCartSaga)
    yield takeEvery(DELETE_CART,deleteCartSaga)
}