import {takeEvery,put} from "redux-saga/effects"
import { createMaincategoryApi,getMaincategoryApi ,updateMaincategoryApi,deleteMaincategoryApi} from "../Services"
import {ADD_MAINCATEGORY,ADD_MAINCATEGORY_RED,GET_MAINCATEGORY,GET_MAINCATEGORY_RED,UPDATE_MAINCATEGORY,UPDATE_MAINCATEGORY_RED,DELETE_MAINCATEGORY,DELETE_MAINCATEGORY_RED} from "../Constants"


 function* createMaincategorySaga(action){  
     var response=yield createMaincategoryApi(action.payload)   //executor
    yield put({type:ADD_MAINCATEGORY_RED,data:response})
}

 function* getMaincategorySaga(){    //executor
    var response=yield getMaincategoryApi()
    yield put({type:GET_MAINCATEGORY_RED,data:response})
}

function* updateMaincategorySaga(action){   //executor
    var response=yield updateMaincategoryApi(action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,data:response})
}
function* deleteMaincategorySaga(action){    //executor
   yield deleteMaincategoryApi(action.payload)
    yield put({type:DELETE_MAINCATEGORY_RED,data:action.payload})
}



export function* maincategorySaga(){    //watcher
    yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
}