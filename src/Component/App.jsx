import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import Cart from './Cart'
import Checkout from './Checkout'
import SingleProductPage from './SingleProductPage'
import AdminHome from './Admin/AdminHome'
import Login from './Login'
import SignUp from './SignUp'


import AdminMaincategory from './Admin/AdminMaincategory'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import AdminSubcategory from './Admin/AdminSubcategory'
import AdminAddSubcategory from './Admin/AdminAddSubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import Profile from './Profile'
import Updateprofile from './UpdateProfile'
import Confirmation from './Confirmation'
import Newslatter from './Newslatter'
import AdminUsers from './Admin/AdminUsers'
import AdminNewslatter from './Admin/AdminNewslatter'
import AdminContacts from './Admin/AdminContact'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminCheckout from './Admin/AdminCheckout'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'



export default function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/shop/:maincat/' element={<Shop/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/single-product-page/:id' element={<SingleProductPage/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<SignUp/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/update-profile' element={<Updateprofile/>}/>
   <Route path='/confirmation' element={<Confirmation/>}/>
   <Route path='/newslatter' element={<Newslatter/>}/>
   
   <Route path='/admin-home' element={<AdminHome/>}/>
   <Route path='/admin-maincategory' element={<AdminMaincategory/>}/>
   <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>}/>
   <Route path='/admin-update-maincategory/:id' element={<AdminUpdateMaincategory/>}/>

   <Route path='/admin-subcategory' element={<AdminSubcategory/>}/>
   <Route path='/admin-add-subcategory' element={<AdminAddSubcategory/>}/>
   <Route path='/admin-update-subcategory/:id' element={<AdminUpdateSubcategory/>}/>

   <Route path='/admin-brand' element={<AdminBrand/>}/>
   <Route path='/admin-add-brand' element={<AdminAddBrand/>}/>
   <Route path='/admin-update-brand/:id' element={<AdminUpdateBrand/>}/>

   <Route path='/admin-product' element={<AdminProduct/>}/>
   <Route path='/admin-add-product' element={<AdminAddProduct/>}/>
   <Route path='/admin-update-product/:id' element={<AdminUpdateProduct/>}/>
   <Route path='/admin-users' element={<AdminUsers/>}/>
   <Route path='/admin-newslatter' element={<AdminNewslatter/>}/>
   <Route path='/admin-contact' element={<AdminContacts/>}/>
   <Route path='/admin-single-contact/:id' element={<AdminSingleContact/>}/>
   <Route path='/admin-checkout' element={<AdminCheckout/>}/>
   <Route path='/admin-single-checkout/:id' element={<AdminSingleCheckout/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}
