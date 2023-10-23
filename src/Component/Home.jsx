import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from './Store/ActionCreators/ProductActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import Newslatter from './Newslatter';

export default function Home() {
  var product = useSelector((item) => item.ProductStateData)
  product.sort((x, y) => y.id - x.id)
  product = product.slice(0, 8)
  var dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [product.length])
  return (
    <>
      <section id="home-section" className="hero myslider">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" height="600px" src="assets/images/bg_1.png" alt=""/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" height="600px" src="assets/images/bg_2.png" alt=""/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-2 py-md-2">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light p-1">
        <div className="container">
          <div className="row justify-content-center mb-1 pb-1">
            <div className="col-md-12 heading-section text-center ">
              <h2 className="mb-1">Latest Product</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {
              product.map((item, index) => {
                return <div key={index} className="col-sm-12 col-md-6 col-lg-3  d-flex">
                  <div className="product d-flex flex-column">
                    <a target='_blank' href={`/assets/images/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`/assets/images/${item.pic1}`} style={{ height: "250px", width: "100%" }} alt="" />
                      <span className="status">{item.discount}% Off</span>
                      <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3">
                      <div className="d-flex">
                        <div className="cat">
                          <span>Lifestyle</span>
                        </div>
                        <div className="rating">
                          <p className="text-right mb-0">
                            <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                            <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                            <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                            <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                            <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                          </p>
                        </div>
                      </div>
                      <h3><Link to={`/single-product-page/${item.id}`}>{item.name}</Link></h3>
                      <div className="pricing">
                        <p className="price"><span className="mr-2 price-dc">&#8377;{item.baseprice}</span><span className="price-sale">&#8377;{item.finalprice}</span></p>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <Link to={`/single-product-page/${item.id}`} className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>

                      </p>
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        </div>
      </section>



      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="choose-wrap divider-one img p-5 d-flex align-items-end" style={{ backgroundImage: "url('assets/images/choose-1.jpg')" }}>
                <div className="text text-center text-white px-2">
                  <h2>Men's Collection</h2>
                  <p><Link to="/shop/Male" className="btn btn-black px-3 py-2">Shop now</Link></p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                <div className="col-md-12">
                  <div className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end" style={{ backgroundImage: "url('assets/images/choose-2.jpg')" }}>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text text-white px-5">
                        <h2>Women's Collection</h2>
                        <p><Link to="/shop/Female" className="btn btn-black px-3 py-2">Shop now</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                        <div className="text text-center px-5">
                          <span className="subheading">Summer Sale</span>
                          <h2>Extra 50% Off</h2>
                          <p><Link to="/shop/All" className="btn btn-black px-3 py-2">Shop now</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch d-flex align-items-center" style={{ backgroundImage: "url('assets/images/image_3.jpg')" }}>
                        <div className="text text-center text-white px-5 mt-5">
                          <h2>Kids Collection</h2>
                          <p><Link to="/shop/Kids" className="btn btn-black px-3 py-2">Shop now</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section p-2">
        <div className="container">
          <div className="row">
            <div className="services-flow row">
              <div className="services-2 p- d-flex col-lg-3 col-md-4 col-12 ">
                <div className="icon">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="text">
                  <h3>Free Shipping</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex col-lg-3 col-md-4 col-12 ">
                <div className="icon">
                  <span className="flaticon-heart-box"></span>
                </div>
                <div className="text">
                  <h3>Valuable Gifts</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex col-lg-3 col-md-4 col-12 ">
                <div className="icon">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex col-lg-3 col-md-4 col-12 ">
                <div className="icon">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

     <Newslatter/>

    </>
  )
}
