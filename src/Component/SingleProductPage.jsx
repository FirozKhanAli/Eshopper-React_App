import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProduct } from './Store/ActionCreators/ProductActionCreators';
import { getCart,addCart } from './Store/ActionCreators/CartActionCreators';
import { getWishlist,addWishlist } from './Store/ActionCreators/WishlistActionCreators';
import { useDispatch, useSelector } from 'react-redux';


export default function SingleProductPage() {
    var [qty,setqty]=useState(1)
    var [p, setp] = useState({
        name:"",
        productid:"",
        userid:"",
        color:"",
        size:"",
        price:0,
        qty:1,
        pic1:""
    })
    var product = useSelector((item) => item.ProductStateData)
    var cart = useSelector((item) => item.CartStateData)
    var wishlist = useSelector((item) => item.WishlistStateData)
    var { id } = useParams()
     var navigate=useNavigate()
    var dispatch = useDispatch()
    
    function AddToCart(){
        var d=cart.find((item)=>item.productid===Number(id) && item.userid===localStorage.getItem("userid"))
        if(d)
        navigate("/cart")
    else{
        var item={
            userid:localStorage.getItem("userid"),
            productid:p.id,
            name:p.name,
            color:p.color,
            size:p.size,
            qty:qty,
            price:p.finalprice,
            pic:p.pic1
        }
        dispatch(addCart(item))
        navigate("/cart")
    }
}
function AddToWishlist(){
    var d=wishlist.find((item)=>item.productid===Number(id) && item.userid===localStorage.getItem("userid"))
        if(d)
        navigate("/profile")
    else{
        var item={
            userid:localStorage.getItem("userid"),
            productid:p.id,
            name:p.name,
            color:p.color,
            size:p.size,
            price:p.finalprice,
            pic:p.pic1
        }
        dispatch(addWishlist(item))
        navigate("/profile")
    }
}

function getApiData() {
    dispatch(getProduct())
    dispatch(getCart())
    dispatch(getWishlist())
    var data = product.find((item) => item.id === Number(id))
    if (data)
        setp(data)
}
    useEffect(() => {
        getApiData()
    }, [cart.length,wishlist.length])
    return (
        <>



            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={`/assets/images/${p.pic1}`} height="600px" className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/images/${p.pic2}`} height="600px" className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item active">
                                        <img src={`/assets/images/${p.pic3}`} height="600px" className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/images/${p.pic4}`} height="600px" className="d-block w-100" alt="" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>


                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ">
                            <h3>{p.name}</h3>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Category</div>
                                <div className='border w-50 p-3'>{p.maincategory}/{p.subcategory}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Brand</div>
                                <div className='border w-50 p-3'>{p.brand}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Price</div>
                                <div className='border w-50 p-3'>&#8377;<del>{p.baseprice}</del><sup>{p.finalprice}</sup>&nbsp;&nbsp;&nbsp;&nbsp;{p.discount}% Off</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Color</div>
                                <div className='border w-50 p-3'>{p.color}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Size</div>
                                <div className='border w-50 p-3'>{p.size}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Stock</div>
                                <div className='border w-50 p-3'>{p.stock}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border w-50 p-3'>Description</div>
                                <div className='border w-50 p-3'>{p.description}</div>
                            </div>
                           
                            <div className="row mt-4">

                                <div className="w-100"></div>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="" onClick={()=>{
                                            if(qty>1)
                                            setqty(qty-1)
                                        }}>
                                            <i className="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="qty" name="qty" className="quantity form-control input-number" value={qty} min="1" max="100" />
                                    <span className="input-group-btn ml-2">
                                        <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="" onClick={()=>setqty(qty+1)}>
                                            <i className="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>

                            </div>

                            <div className='d-flex'>
                                <button  onClick={AddToCart} className="btn btn-light w-100 mr-2">Add to Cart</button>
                                <button  onClick={AddToWishlist} className="btn btn-light w-100">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>




                    <div className="row mt-5">
                        <div className="col-md-12 nav-link-wrap">
                            <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <Link className="nav-link  active mr-lg-1" id="v-pills-1-tab" data-toggle="pill" to="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Description</Link>

                                <Link className="nav-link  mr-lg-1" id="v-pills-2-tab" data-toggle="pill" to="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Manufacturer</Link>

                                <Link className="nav-link " id="v-pills-3-tab" data-toggle="pill" to="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Reviews</Link>

                            </div>
                        </div>
                        <div className="col-md-12 tab-wrap">

                            <div className="tab-content bg-light" id="v-pills-tabContent">

                                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                                    <div className="p-4">
                                        <h3 className="mb-4">Nike Free RN 2019 iD</h3>
                                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                                    <div className="p-4">
                                        <h3 className="mb-4">Manufactured By Nike</h3>
                                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                                    <div className="row p-4">
                                        <div className="col-md-7">
                                            <h3 className="mb-4">23 Reviews</h3>
                                            <div className="review">
                                                <div className="user-img" style={{ backgroundImage: "url('assets/images/person_1.jpg')" }}></div>
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                        </span>
                                                        <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                    </p>
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div className="user-img" style={{ backgroundImage: "url('assets/images/person_2.jpg')" }}></div>
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                        </span>
                                                        <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                    </p>
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div className="user-img" style={{ backgroundImage: "url('assets/images/person_3.jpg')" }}></div>
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                        </span>
                                                        <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                    </p>
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="rating-wrap">
                                                <h3 className="mb-4">Give a Review</h3>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        (98%)
                                                    </span>
                                                    <span>20 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        (85%)
                                                    </span>
                                                    <span>10 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        (98%)
                                                    </span>
                                                    <span>5 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        (98%)
                                                    </span>
                                                    <span>0 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        <i className="ion-ios-star-outline"></i>
                                                        (98%)
                                                    </span>
                                                    <span>0 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
