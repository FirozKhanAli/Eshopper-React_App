import React, { useState,useEffect } from 'react'
import Leftnav from './Leftnav'
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand} from '../Store/ActionCreators/BrandActionCreators'
import { getProduct,updateProduct} from '../Store/ActionCreators/ProductActionCreators'
import {  useNavigate, useParams } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'

export default function AdminUpdateMaincategory() {
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
    var {id}=useParams()
    var product = useSelector((state) => state.ProductStateData)
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
            dispatch(updateProduct(item))
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
                    <h5 className='bg-secondary text-center text-light p-2'>Maincategory</h5>
                    <form className='p-3' onSubmit={postData}>
                  <div className='mb-3'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' id='name' placeholder='Enter Maincategory Name : ' className='form-control' onChange={getData} value={data.name}/>
                  
                  </div>
                  <div className='mb-3'>
                  <button type='submit' className='btn btn-secondary text-light text-center w-100'>Update</button>
                  </div>
                    
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
