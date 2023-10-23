import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContact, updateContact } from '../Store/ActionCreators/ContactActionCreators';
import { useNavigate, useParams } from 'react-router-dom';

export default function AdminSingleContact() {
    var [data, setdata] = useState({})
    var contact = useSelector((item) => item.ContactStateData)
    var { id } = useParams()
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function update() {
     dispatch(updateContact({...data,status:"Done"}))
    setdata((old)=>{
        return{
            ...old,
            ['status']:"Done"
        }
    })
    }
    function deleteRecord() {
        dispatch(deleteContact({...data,status:"Done"}))
        navigate("/admin-contact")
    }
function getApiData(){
    dispatch(getContact())
    var d = contact.find((item) => item.id === Number(id))
    if (d) {
        setdata(d)
    }
}
    useEffect(() => {
        getApiData()
    }, [contact.length])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                        <h5 className='bg-secondary text-center text-light p-2'>Single Contact</h5>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Id
                            </div>
                            <div className='w-50 border p-3'>
                                {data.id}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Name
                            </div>
                            <div className='w-50 border p-3'>
                                {data.name}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Email
                            </div>
                            <div className='w-50 border p-3'>
                                {data.email}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Phone
                            </div>
                            <div className='w-50 border p-3'>
                                {data.phone}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Subject
                            </div>
                            <div className='w-50 border p-3'>
                                {data.subject}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Message
                            </div>
                            <div className='w-50 border p-3'>
                                {data.message}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Date
                            </div>
                            <div className='w-50 border p-3'>
                                {data.time}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Status
                            </div>
                            <div className='w-50 border p-3'>
                                {data.status}
                            </div>
                        </div>
                        <div className=' mt-2 d-flex '>
                            <div className='w-100 p-2 border'>
                                {
                                    data.status === "Active" ?
                                        <button className='btn btn-secondary w-100 p-2' onClick={update}>Update Status to Done</button> :
                                        <button className='btn btn-secondary w-100 p-2' onClick={deleteRecord}>Delete</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
