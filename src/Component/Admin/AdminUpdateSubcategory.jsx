import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { getSubcategory, updateSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators'
import {  useNavigate, useParams } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'

export default function AdminUpdateSubcategory() {
    var [name,setname]=useState("")
    var subcategory=useSelector((state)=>state.SubcategoryStateData)
    var navigate=useNavigate()
    var dispatch=useDispatch()
    var {id}=useParams()
    function getData(e){
        setname(e.target.value)
    }
  function postData(e){
        e.preventDefault()
       var item=subcategory.find((item)=>item.name===name)
       if(item)
       alert("Subcategory Name is Already Exist")
    else{
       dispatch(updateSubcategory({id:id,name:name}))
       navigate("/admin-subcategory")
    }
    }
    useEffect(()=>{
        dispatch(getSubcategory())
        var item=subcategory.find((item)=>item.id===Number(id))
        setname(item.name)
    },[])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                    <h5 className='bg-secondary text-center text-light p-2'>Subcategory</h5>
                    <form className='p-3' onSubmit={postData}>
                  <div className='mb-3'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' id='name' placeholder='Enter Subcategory Name : ' className='form-control' onChange={getData} value={name}/>
                  
                  </div>
                  <div className='mb-3'>
                  <button type='submit' className='btn btn-secondary text-light text-center w-100'>Update</button>
                  </div>
                    
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
