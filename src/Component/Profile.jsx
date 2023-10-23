import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from "../Component/Store/ActionCreators/UserActionCreators"
import { deleteWishlist, getWishlist } from "../Component/Store/ActionCreators/WishlistActionCreators"
import { getCheckout } from "../Component/Store/ActionCreators/CheckoutActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import BuyerProfile from './BuyerProfile'


export default function Profile() {
    var users = useSelector((item) => item.UserStateData)
    var wishlists = useSelector((item) => item.WishlistStateData)
    var checkouts = useSelector((item) => item.CheckoutStateData)
    var [user, setuser] = useState({})
    var [wishlist, setwishlist] = useState([])
    var [order, setorder] = useState([])
    var dispatch = useDispatch()
    function getApiData() {
        dispatch(getUser())
        dispatch(getWishlist())
        dispatch(getCheckout())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)
        data = wishlists.filter((item) => item.userid === localStorage.getItem("userid"))
        if (data)
            setwishlist(data)
        data = checkouts.filter((item) => item.userid === localStorage.getItem("userid"))
        if (data)
            setorder(data)
    }
    function deleteItem(id) {
        dispatch(deleteWishlist({ id: id }))
        getApiData()
    }
    useEffect(() => {
        getApiData()
    }, [users.length, wishlists.length, checkouts.length])
    return (
        <>
            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        {
                            users.pic ?
                                <img src={`/assets/images/${user.pic}`} height="500px" width="100%" alt='' /> :
                                <img src={`/assets/images/noimage.png`} height="500px" width="100%" alt='' />
                        }
                    </div>
                    <div className='col-md-6 col-12'>
                        <BuyerProfile user={user} />
                    </div>
                    <div className="cart-list  m-auto">
                        <h5 className='text-center bg-secondary p-2 text-light mt-3'>Wishlist Section</h5>
                        <table className="table">
                            <thead className="">
                                <tr className="text-center">
                                    <th>&nbsp;</th>
                                    <th>Product</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Cart</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishlist.map((item, index) => {
                                        return <tr key={index} className="text-center">

                                            <td className="image-prod"><div className="img" style={{ backgroundImage: `url(assets/images/${item.pic})` }}></div></td>

                                            <td className="product-name">
                                                <h3>{item.name}</h3>

                                            </td>
                                            <td className='product-color'><h6>{item.color}</h6></td>
                                            <td className='product-size'><h6>{item.size}</h6></td>
                                            <td className="price"><h6>&#8377;{item.price}</h6></td>
                                            <td className="quantity"><Link to={`/single-product-page/${item.productid}`} onClick={() => deleteItem(item.id)}><span className="material-symbols-outlined">shopping_cart</span></Link></td>
                                            <td className="quantity"><button onClick={() => deleteItem(item.id)}><span className="material-symbols-outlined">delete</span></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <h5 className='text-center  mt-3'>Order History Section</h5>
                {
                    order.map((item, index) => {
                        return <div key={index} className='row'>
                            <div className='col-lg-3'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Order Id</th>
                                            <td>{item.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Order Status</th>
                                            <td>{item.orderstatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Mode </th>
                                            <td>{item.paymentmode}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Status</th>
                                            <td>{item.paymentstatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Amount</th>
                                            <td>{item.totalAmount}</td>
                                        </tr>
                                        <tr>
                                        <th>Shipping Amount</th>
                                        <td>{item.shippingAmount}</td>
                                    </tr>
                                    <tr>
                                    <th>Final Amount</th>
                                    <td>{item.finalAmount}</td>
                                </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-lg-9 border'>
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
                                    item.products.map((item, index) => {
                                        return <tr key={index} className="text-center">

                                            <td className="image-prod"><div className="img" style={{ backgroundImage: `url(assets/images/${item.pic})` }}></div></td>

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
                    })
                }

            </div>


        </>
    )
}
