import React, { useState, useEffect } from 'react'
import Leftnav from './Leftnav'
import { addProduct, getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../Store/ActionCreators/BrandActionCreators'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function AdminAddProduct() {
    var [data, setdata] = useState({
        name:"",
        maincategory:"",
        subcategory:"",
        brand:"",
        stock:"In stock",
        color:"",
        size:"",
        baseprice:0,
        discount:0,
        finalprice:0,
        description:"In Sample Product",
        pic1:"",
        pic2:"",
        pic3:"",
        pic4:""
    })
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()


    function getData(e) {
        var name=e.target.name
        var value=e.target.value
        setdata((old)=>{
            return {
                ...old,
                [name]:value
            }
        })
    }
    function getFile(e) {
        var name=e.target.name
        var value=e.target.files[0].name
        setdata((old)=>{
            return {
                ...old,
                [name]:value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var bp=Number(data.baseprice)
        var d=Number(data.discount)
        var fp=parseInt(bp-bp*d/100)
        var mc=data.maincategory
        var sc=data.subcategory
        var br=data.brand
        if(mc==="")
        mc=maincategory[0].name
        if(sc==="")
        sc=subcategory[0].name
        if(br==="")
        br=brand[0].name
        var item={
            id:data.id,
            name:data.name,
            maincategory:mc,
            subcategory:sc,
            brand:br,
            color:data.color,
            size:data.size,
            baseprice:bp,
            discount:d,
            finalprice:fp,
            stock:data.stock,
            description:data.description,
            pic1:data.pic1,
            pic2:data.pic2,
            pic3:data.pic3,
            pic4:data.pic4
        }
            dispatch(addProduct(item))
            navigate("/admin-product")
        
    }
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
    }, [])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                        <h5 className='bg-secondary text-center text-light p-2'>Product</h5>
                        <form className='p-3' onSubmit={postData}>
                            <div className='mb-3'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' id='name' placeholder='Enter Product Name : ' className='form-control' onChange={getData} />
                            </div>
                            <div className='row mb-3'>
                                <div className='col-lg-3 col-md-6 col-12'>
                                    <label htmlFor='maincategory'>Maincategory</label>
                                    <select name='maincategory' id='maincategory' onChange={getData} className='form-control'>
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12'>
                                    <label htmlFor='subcategory'>Subcategory</label>
                                    <select name='subcategory' id='subcategory' onChange={getData} className='form-control'>
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12'>
                                    <label htmlFor='brand'>Brand</label>
                                    <select name='brand' id='brand' onChange={getData} className='form-control'>
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12'>
                                    <label htmlFor='stock'>Stock</label>
                                    <select name='stock' id='stock' onChange={getData} className='form-control'>
                                        <option value="In Stock">In Stock</option>
                                        <option value="Out of Stock">Out of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-md-6 col-12'>
                                    <label htmlFor='color'>Color</label>
                                    <input type='text' name='color' id='color' placeholder='Enter Color' onChange={getData} className='form-control'></input>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <label htmlFor='size'>Size</label>
                                    <input type='text' name='size' id='size' placeholder='Enter Size' onChange={getData} className='form-control'></input>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-md-6 col-12'>
                                    <label htmlFor='Baseprice'>Base Price</label>
                                    <input type='number' name='baseprice' id='baseprice' placeholder='Enter Base Price' onChange={getData} className='form-control'></input>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <label htmlFor='discount'>Discount</label>
                                    <input type='number' name='discount' id='discount' placeholder='Enter Discount' onChange={getData} className='form-control'></input>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='description'>Description</label>
                                <textarea name='description' id='description' rows="4" onChange={getData} className='form-control' value={data.description}></textarea>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-md-6 col-12'>
                                    <label className='pic1'>Pic1</label>
                                    <input type='file' name='pic1' id='pic1' placeholder='Enter Pic1' onChange={getFile} className='form-control' />
                                </div>
                                <div className='col-md-6 col-12'>
                                    <label className='pic2'>Pic2</label>
                                    <input type='file' name='pic2' id='pic2' placeholder='Enter Pic2' onChange={getFile} className='form-control' />
                                </div>
                            </div>
                            <div className='row mb-3'>
                            <div className='col-md-6 col-12'>
                                <label className='pic3'>Pic3</label>
                                <input type='file' name='pic3' id='pic3' placeholder='Enter Pic3' onChange={getFile} className='form-control' />
                            </div>
                            <div className='col-md-6 col-12'>
                                <label className='pic4'>Pic4</label>
                                <input type='file' name='pic4' id='pic4' placeholder='Enter Pic4' onChange={getFile} className='form-control' />
                            </div>
                        </div>
                            <div className='mb-3'>
                                <button type='submit' className='btn btn-secondary text-light text-center w-100'>Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
