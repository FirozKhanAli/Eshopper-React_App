import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { getBrand, updateBrand } from '../Store/ActionCreators/BrandActionCreators'
import {  useNavigate, useParams } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'

export default function AdminUpdateBrand() {
    var [name,setname]=useState("")
    var brand=useSelector((state)=>state.BrandStateData)
    var navigate=useNavigate()
    var dispatch=useDispatch()
    var {id}=useParams()
    function getData(e){
        setname(e.target.value)
    }
  function postData(e){
        e.preventDefault()
       var item=brand.find((item)=>item.name===name)
       if(item)
       alert("Brand Name is Already Exist")
    else{
       dispatch(updateBrand({id:id,name:name}))
       navigate("/admin-brand")
    }
    }
    useEffect(()=>{
        dispatch(getBrand())
        var item=brand.find((item)=>item.id===Number(id))
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
                    <h5 className='bg-secondary text-center text-light p-2'>Brand</h5>
                    <form className='p-3' onSubmit={postData}>
                  <div className='mb-3'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' id='name' placeholder='Enter Brand Name : ' className='form-control' onChange={getData} value={name}/>
                  
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
