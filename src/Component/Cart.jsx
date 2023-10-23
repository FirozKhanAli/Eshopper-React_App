import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCart, getCart, updateCart } from './Store/ActionCreators/CartActionCreators';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  var [cart, setcart] = useState([])
  var [total, settotal] = useState(0)
  var [shipping, setshipping] = useState(0)
  var [final, setfinal] = useState(0)
  var carts = useSelector((item) => item.CartStateData)
  var dispatch = useDispatch()
  function getApiData() {
    dispatch(getCart())
    var data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
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

  function update(id, op) {
    var item = carts.find((item) => item.id === Number(id))
    if (op === "dec" && item.qty == 1)
      return item
    
    else if (op === "dec") {
      item.qty = item.qty - 1
      item.total = item.total - item.price
    }
    else {
      item.qty = item.qty + 1
      item.total = item.total + item.price
    }
    dispatch(updateCart(item))
    getApiData()

  }
  function deleteItem(id) {
    dispatch(deleteCart({ id: id }))
    getApiData()
  }
  useEffect(() => {
    getApiData()
  }, [carts.length, cart.length])
  return (
    <>


      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="cart-list">
                <table className="table">
                  <thead className="">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Delete</th>
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
                          <td className="quantity"><button onClick={() => update(item.id, "dec")}><span className="material-symbols-outlined">remove</span></button>&nbsp;&nbsp;&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => update(item.id, "inc")}><span className="material-symbols-outlined">add</span></button></td>
                          <td className="total">&#8377;{item.total}</td>
                          <td className="quantity"><button onClick={() => deleteItem(item.id)}><span className="material-symbols-outlined">delete</span></button></td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className='col-md-6'></div>
            <div className=" col-md-6 mt-3 cart-wrap ">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>&#8377;{total}</span>
                </p>
                <p className="d-flex">
                  <span>Shipping Amount</span>
                  <span>&#8377;{shipping}</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Final Amount</span>
                  <span>&#8377;{final}</span>
                </p>
              </div>
              <p className="text-center"><Link to="/checkout" className="btn btn-secondary w-100">Proceed to Checkout</Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
