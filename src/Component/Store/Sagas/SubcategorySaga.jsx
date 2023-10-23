import {takeEvery,put} from "redux-saga/effects"
import { createSubcategoryApi,getSubcategoryApi ,updateSubcategoryApi,deleteSubcategoryApi} from "../Services"
import {ADD_SUBCATEGORY,ADD_SUBCATEGORY_RED,GET_SUBCATEGORY,GET_SUBCATEGORY_RED,UPDATE_SUBCATEGORY,UPDATE_SUBCATEGORY_RED,DELETE_SUBCATEGORY,DELETE_SUBCATEGORY_RED} from "../Constants"


 function* createSubcategorySaga(action){  
     var response=yield createSubcategoryApi(action.payload)   //executor
    yield put({type:ADD_SUBCATEGORY_RED,data:response})
}

 function* getSubcategorySaga(){    //executor
    var response=yield getSubcategoryApi()
    yield put({type:GET_SUBCATEGORY_RED,data:response})
}

function* updateSubcategorySaga(action){   //executor
    var response=yield updateSubcategoryApi(action.payload)
    yield put({type:UPDATE_SUBCATEGORY_RED,data:response})
}
function* deleteSubcategorySaga(action){    //executor
   yield deleteSubcategoryApi(action.payload)
    yield put({type:DELETE_SUBCATEGORY_RED,data:action.payload})
}



export function* subcategorySaga(){    //watcher
    yield takeEvery(ADD_SUBCATEGORY,createSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY,getSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSubcategorySaga)
}