import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, addUser } from "../Component/Store/ActionCreators/UserActionCreators"
import { useDispatch, useSelector } from 'react-redux'

export default function SignUp() {
    var [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
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
    function postData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            var d = users.find((item) => item.username === data.username)
            console.log(d);
            if (d)
               {
                alert("Username Already Taken!!!")
               }

            else {
                var item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    addressline1: "",
                    addressline2: "",
                    addressline3: "",
                    pin: "",
                    city: "",
                    state: "",
                    pic: "",
                    role: "User"
                }
                console.log(item);
                dispatch(addUser(item))
                navigate("/login")
            }

        }

        else
            alert("Password And Confirm Password Doesn't Matched")
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <div className='container-fluid w-100'>
                                <div className='m-auto w-80'>
                                    <h5 className='text-center text-light bg-secondary p-2'>Sign Up Section</h5>
                                    <form onSubmit={postData}>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='text' name='name' id='name' placeholder='Enter Full Name :' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='text' name='username' id='username' placeholder='Enter User Name :' className='form-control' onChange={getData} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='email' name='email' id='email' placeholder='Enter Email Address :' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='text' name='phone' id='phone' placeholder='Enter Phone Number :' className='form-control' onChange={getData} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <div className='col-md-6 col-12'>
                                                <input type='password' name='password' id='password' placeholder='Enter Password :' className='form-control' onChange={getData} />
                                            </div>
                                            <div className='col-md-6 col-12-'>
                                                <input type='password' name='cpassword' id='cpassword' placeholder=' Confirmed Password :' className='form-control' onChange={getData} />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <button type='submit' className='btn btn-secondary btn-lg text-light text-center w-100' >Submit</button>
                                        </div>
                                        <div className='mb-3'>
                                            <Link to="/login">Already User?Login To Your Account</Link>
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

