import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from "../Component/Store/ActionCreators/UserActionCreators"
import { useDispatch, useSelector } from 'react-redux'


export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
    })
    var users = useSelector((state) => state.UserStateData)
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
        var user = users.find((item) => item.username === data.username && item.password===data.password)
        if (user) {
            localStorage.setItem("login", true)
            localStorage.setItem("login", user.name)
            localStorage.setItem("username", user.username)
            localStorage.setItem("userid", user.id)
            localStorage.setItem("role", user.role)
            if(user.role==="Admin")
            navigate("/admin-home")
            else
            navigate("/profile")
        }
        else{
            alert("Invalid User Name or Password!!")
        }
    }
    useEffect(() => {
        dispatch(getUser())
    },[users.length])
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <div className='container-fluid w-100'>
                                <div className='m-auto w-60'>
                                    <h5 className='text-center text-light bg-secondary p-2'>Login Section</h5>
                                    <form onSubmit={postData}>
                                        <div className='mb-3'>
                                            <input type='text' name='username' id='username' placeholder='Enter User Name :' className='form-control' onChange={getData} />
                                        </div>
                                        <div className='mb-3'>
                                            <input type='password' name='password' id='password' placeholder='Enter Password :' className='form-control' onChange={getData} />
                                        </div>
                                        <div className='mb-3'>
                                            <button type='submit' className='btn btn-secondary btn-lg text-light text-center w-100'>Login</button>
                                        </div>
                                        <div className='d-flex'>
                                            <Link to="/login">Forgot Password</Link>
                                            <Link to="/signup" >New User?Create a Free Account</Link>
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
