import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import { useDispatch, useSelector } from 'react-redux';
import { getCheckout, updateCheckout } from '../Store/ActionCreators/CheckoutActionCreators';
import { getUser } from '../Store/ActionCreators/UserActionCreators';
import { useParams } from 'react-router-dom';

export default function AdminSingleCheckout() {
    var [data, setdata] = useState({})
    var [user, setuser] = useState({})
    var [orderstatus, setorderstatus] = useState("")
    var [paymentstatus, setpaymentstatus] = useState("")
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var users = useSelector((state) => state.UserStateData)
    var { id } = useParams()
    var dispatch = useDispatch()
    function update() {
        dispatch(updateCheckout({ ...data, paymentstatus: paymentstatus, orderstatus: orderstatus }))
        setdata((old) => {
            return {
                ...old,
                ['paymentstatus']: paymentstatus,
                ['orderstatus']: orderstatus,
            }
        })
    }

    function getApiData() {
        dispatch(getCheckout())
        dispatch(getUser())
        var d = checkouts.find((item) => item.id === Number(id))
        if (d) {
            setdata(d)
            setorderstatus(d.orderstatus)
            setpaymentstatus(d.paymentstatus)
        }
        d = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d) {
            setuser(d)
        }
    }
    function getdata(e) {
        if (e.target.name === "orderstatus")
            setorderstatus(e.target.value)
        else
            setpaymentstatus(e.target.value)
    }
    useEffect(() => {
        getApiData()
    }, [checkouts.length, users.length])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                        <h5 className='bg-secondary text-center text-light p-2'>Single Checkout</h5>
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
                                User Id
                            </div>
                            <div className='w-50 border p-3'>
                                <table cellPadding="10px">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <ul style={{ listStyleType: "none" }}>
                                                <li>{user.addressline1}</li>
                                                <li>{user.addressline2}</li>
                                                <li>{user.addressline3}</li>
                                                <li>{user.pin}</li>
                                                <li>{user.city}</li>
                                                <li>{user.state}</li>

                                            </ul>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Payment Mode
                            </div>
                            <div className='w-50 border p-3'>
                                {data.paymentmode}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Payment Status
                            </div>
                            <div className='w-50 border p-3' >
                                {data.paymentstatus}
                                {
                                    data.paymentstatus !== "Done" ?
                                        <select name='paymentstatus' onChange={getdata} className='form-control'>
                                            <option value="Pending">Pending</option>
                                            <option value="Done">Done</option>
                                        </select> : ""
                                }
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Order Status
                            </div>
                            <div className='w-50 border p-3'>
                                <p className='w-50'> {data.orderstatus}</p>
                                {
                                    data.orderstatus !== "Delivered" ?
                                        <select name='orderstatus' onChange={getdata} className='form-control'>
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Ready To Ship">Ready To Ship</option>
                                            <option value="Packed">Packed</option>
                                            <option value="Ready To Ship">Ready To Ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out Of Delivery">Out Of Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select> : ""
                                }

                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Total Amount
                            </div>
                            <div className='w-50 border p-3'>
                                &#8377;{data.totalAmount}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Shipping Amount
                            </div>
                            <div className='w-50 border p-3'>
                                &#8377;{data.shippingAmount}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-50 border p-3'>
                                Final Amount
                            </div>
                            <div className='w-50 border p-3'>
                                &#8377;{data.finalAmount}
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
                        <div className=' mt-2 d-flex '>
                            <div className='w-100 p-2 border'>
                                {
                                    data.orderstatus !== "Delivered" && data.paymentstatus !== "Done" ?
                                        <button className='btn btn-secondary w-100 p-2' onClick={update}>Update</button> :
                                        ""
                                }
                            </div>
                        </div>
                       <div className='mt-5'>
                       <table className="table table-bordered">
                       <thead className="">
                           <tr className="text-center">
                               <th>&nbsp;</th>
                               <th>Product</th>
                               <th>Color</th>
                               <th>Size</th>
                               <th>Price</th>
                               <th>Quantity</th>
                               <th>Total</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                              data.products && data.products.map((item, index) => {
                                   return <tr key={index} className="text-center">

                                       <td className="image-prod"><div className="img" style={{ backgroundImage: `url(/assets/images/${item.pic})` }}></div></td>

                                       <td className="product-name">
                                           <h3>{item.name}</h3>
                                       </td>
                                       <td className='product-color'><h6>{item.color}</h6></td>
                                       <td className='product-size'><h6>{item.size}</h6></td>
                                       <td className="price"><h6>&#8377;{item.price}</h6></td>
                                       <td className='product-qty'><h6>{item.qty}</h6></td>
                                       <td className="total"><h6>&#8377;{item.total}</h6></td>
                                       
                                   </tr>
                               })
                           }
                       </tbody>
                   </table>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
