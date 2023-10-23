import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { getUser, updateUser } from "../Component/Store/ActionCreators/UserActionCreators"
import { useDispatch, useSelector } from 'react-redux'

export default function Updateprofile() {
    var [data, setdata] = useState({
        name: "",
        file: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: "",
        role: ""

    })
    var users = useSelector((item) => item.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var item = {
            id:localStorage.getItem("userid"),
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            addressline1: data.addressline1,
            addressline2: data.addressline2,
            addressline3: data.addressline3,
            pin: data.pin,
            city: data.city,
            state: data.state,
            pic: data.pic,
            role: data.role
        }
        dispatch(updateUser(item))
        if(data.role==="Admin")
        navigate("/admin-home")
        else
        navigate("/profile")
    }
    useEffect(() => {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d)
            setdata(d)
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <div className='container-fluid w-100'>
                                <div className='m-auto w-80'>
                                    <h5 className='text-center text-light bg-secondary p-2'>Update Profile Section</h5>
                                    <form onSubmit={postData}>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='text' name='name' id='name' placeholder='Enter Full Name :' className='form-control' onChange={getData}  value={data.name}/>
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='file' name='pic' id='pic' className='form-control' onChange={getFile} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='email' name='email' id='email' placeholder='Enter Email Address :' className='form-control' onChange={getData} value={data.email}/>
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='text' name='phone' id='phone' placeholder='Enter Phone Number :' className='form-control' onChange={getData} value={data.phone}/>
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='text' name='addressline1' id='addressline2' placeholder='Enter House No,Builing Name :' className='form-control' onChange={getData} value={data.addressline1}/>
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='text' name='addressline2' id='addressline2' placeholder=' Enter Street or Near By :' className='form-control' onChange={getData} value={data.addressline2}/>
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='text' name='addressline3' id='addressline3' placeholder='Enter Village or Locality :' className='form-control' onChange={getData}  value={data.addressline3}/>
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='text' name='pin' id='pin' placeholder=' Enter Pin Number :' className='form-control' onChange={getData} value={data.pin}/>
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='text' name='city' id='city' placeholder='Enter City Name :' className='form-control' onChange={getData} value={data.city}/>
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='text' name='state' id='state' placeholder=' Enter State :' className='form-control' onChange={getData} value={data.state}/>
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <button type='submit' className='btn btn-secondary btn-lg text-light text-center w-100' >Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

