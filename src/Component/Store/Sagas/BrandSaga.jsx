import {takeEvery,put} from "redux-saga/effects"
import { createBrandApi,getBrandApi ,updateBrandApi,deleteBrandApi} from "../Services"
import {ADD_BRAND,ADD_BRAND_RED,GET_BRAND,GET_BRAND_RED,UPDATE_BRAND,UPDATE_BRAND_RED,DELETE_BRAND,DELETE_BRAND_RED} from "../Constants"


 function* createBrandSaga(action){  
     var response=yield createBrandApi(action.payload)   //executor
    yield put({type:ADD_BRAND_RED,data:response})
}

 function* getBrandSaga(){    //executor
    var response=yield getBrandApi()
    yield put({type:GET_BRAND_RED,data:response})
}

function* updateBrandSaga(action){   //executor
    var response=yield updateBrandApi(action.payload)
    yield put({type:UPDATE_BRAND_RED,data:response})
}
function* deleteBrandSaga(action){    //executor
   yield deleteBrandApi(action.payload)
    yield put({type:DELETE_BRAND_RED,data:action.payload})
}



export function* brandSaga(){    //watcher
    yield takeEvery(ADD_BRAND,createBrandSaga)
    yield takeEvery(GET_BRAND,getBrandSaga)
    yield takeEvery(UPDATE_BRAND,updateBrandSaga)
    yield takeEvery(DELETE_BRAND,deleteBrandSaga)
}