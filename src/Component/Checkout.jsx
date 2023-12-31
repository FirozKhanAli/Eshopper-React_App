import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from "../Component/Store/ActionCreators/UserActionCreators"
import { getCart,deleteCart } from "../Component/Store/ActionCreators/CartActionCreators"
import { addCheckout } from "../Component/Store/ActionCreators/CheckoutActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import BuyerProfile from './BuyerProfile'


export default function Checkout() {
    var [mode,setMode]=useState("COD")
    var users = useSelector((item) => item.UserStateData)
    var [user, setuser] = useState({})
    var dispatch = useDispatch()
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)
    var carts = useSelector((item) => item.CartStateData)
    var navigate=useNavigate()
    function getData(e){
        setMode(e.target.value)
    }
    function placeOrder(){
        var item={
            userid:localStorage.getItem("userid"),
            paymentmode:mode,
            paymentstatus:"Pending",
            orderstatus:"Order Placed",
            time:new Date(),
            totalAmount:total,
            shippingAmount:shipping,
            finalAmount:final,
            products:cart
        }
        dispatch(addCheckout(item))
        for(let item of cart){
            dispatch(deleteCart({id:item.id}))
        }
        navigate("/confirmation")
    }
    function getApiData() {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)
        dispatch(getCart())
        data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
        if (data) {
            setcart(data)
            var total = 0
            var shipping = 0
            var final = 0
            for (let item of data) {
                total = total + item.total
            }
            if (total > 0 && total <= 1200)
                shipping = 150
            final = total + shipping
            settotal(total)
            setshipping(shipping)
            setfinal(final)
        }
    }
    useEffect(() => {
        getApiData()
    }, [users.length, carts.length])
    return (
        <>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <BuyerProfile user={user} />
                        </div>
                        <div className="col-md-6">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => {
                                                return <tr key={index} className="text-center">

                                                    <td className="image-prod"><div className="img" style={{ backgroundImage: `url(assets/images/${item.pic})` }}></div></td>

                                                    <td className="product-name">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.color}/{item.size}</p>
                                                    </td>
                                                    <td className="price">&#8377;{item.price}</td>
                                                    <td className="quantity">{item.qty}</td>
                                                    <td className="total">&#8377;{item.total}</td>

                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className=" d-flex">
                                <div className="cart-detail cart-total bg-light p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Cart Total</h3>
                                    <p className="d-flex">
                                        <span>Subtotal</span>
                                        <span>&#8377;{total}</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Shipping</span>
                                        <span>&#8377;{shipping}</span>
                                    </p>
                                  
                                    <hr />
                                    <p className="d-flex total-price">
                                        <span>Final</span>
                                        <span>&#8377;{final}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="cart-detail bg-light p-3 p-md-4 mt-3">
                                <h3 className="billing-heading mb-4">Payment Method</h3>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="mode" onChange={getData} className="mr-2" value="" /> Net Banking/Card/UPI</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="mode" onChange={getData} className="mr-2" value="" checked/> Cash On Delivery</label>
                                        </div>
                                    </div>
                                </div>
                               
                               <div>
                               <button  className="btn btn-secondary w-100" onClick={placeOrder}>Place an order</button></div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
