import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Store/ActionCreators/UserActionCreators';
import { Link } from 'react-router-dom';

export default function AdminHome() {
    var [user, setuser] = useState({})
    var users = useSelector((state) => state.UserStateData)
    var dispatch=useDispatch()
    function getApiData() {
        dispatch(getUser())
       var d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d) {
            setuser(d)
        }
    }
    useEffect(() => {
        getApiData()
    }, [ users.length])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                        <div className='row'>
                            <div className='col-md-5'>
                                {
                                    user.pic?
                                    <img src={`/assets/images/${user.pic}`} height="420px" alt=''/>:
                                    <img src='/assets/images/noimage.png' width="100%" height="420px" alt=''/>
                                }
                            </div>
                            <div className='col-md-7'>
                                <h5 className='bg-secondary text-light text-center'>Admin Home</h5>
                                <div className='d-flex'>
                                    <div className='border w-50 p-3'>Name</div>
                                    <div className='border w-50 p-3'>{user.name}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border w-50 p-3'>User Name</div>
                                    <div className='border w-50 p-3'>{user.username}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border w-50 p-3'>Email</div>
                                    <div className='border w-50 p-3'>{user.email}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border w-50 p-3'>Phone</div>
                                    <div className='border w-50 p-3'>{user.phone}</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border w-50 p-3'>Role</div>
                                    <div className='border w-50 p-3'>{user.role}</div>
                                </div>
                                <div className='mt-3'>
                                <Link to="/update-profile" className='btn btn-secondary text-light text-center w-100'>Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
