import {takeEvery,put} from "redux-saga/effects"
import { createProductApi,getProductApi ,updateProductApi,deleteProductApi} from "../Services"
import {ADD_PRODUCT,ADD_PRODUCT_RED,GET_PRODUCT,GET_PRODUCT_RED,UPDATE_PRODUCT,UPDATE_PRODUCT_RED,DELETE_PRODUCT,DELETE_PRODUCT_RED} from "../Constants"


 function* createProductSaga(action){  
     var response=yield createProductApi(action.payload)   //executor
    yield put({type:ADD_PRODUCT_RED,data:response})
}

 function* getProductSaga(){    //executor
    var response=yield getProductApi()
    yield put({type:GET_PRODUCT_RED,data:response})
}

function* updateProductSaga(action){   //executor
    var response=yield updateProductApi(action.payload)
    yield put({type:UPDATE_PRODUCT_RED,data:response})
}
function* deleteProductSaga(action){    //executor
   yield deleteProductApi(action.payload)
    yield put({type:DELETE_PRODUCT_RED,data:action.payload})
}



export function* productSaga(){    //watcher
    yield takeEvery(ADD_PRODUCT,createProductSaga)
    yield takeEvery(GET_PRODUCT,getProductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateProductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteProductSaga)
}