import {takeEvery,put} from "redux-saga/effects"
import { createWishlistApi,getWishlistApi ,updateWishlistApi,deleteWishlistApi} from "../Services"
import {ADD_WISHLIST,ADD_WISHLIST_RED,GET_WISHLIST,GET_WISHLIST_RED,UPDATE_WISHLIST,UPDATE_WISHLIST_RED,DELETE_WISHLIST,DELETE_WISHLIST_RED} from "../Constants"


 function* createWishlistSaga(action){  
     var response=yield createWishlistApi(action.payload)   //executor
    yield put({type:ADD_WISHLIST_RED,data:response})
}

 function* getWishlistSaga(){    //executor
    var response=yield getWishlistApi()
    yield put({type:GET_WISHLIST_RED,data:response})
}

function* updateWishlistSaga(action){   //executor
    var response=yield updateWishlistApi(action.payload)
    yield put({type:UPDATE_WISHLIST_RED,data:response})
}
function* deleteWishlistSaga(action){    //executor
   yield deleteWishlistApi(action.payload)
    yield put({type:DELETE_WISHLIST_RED,data:action.payload})
}



export function* wishlistSaga(){    //watcher
    yield takeEvery(ADD_WISHLIST,createWishlistSaga)
    yield takeEvery(GET_WISHLIST,getWishlistSaga)
    yield takeEvery(UPDATE_WISHLIST,updateWishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
}