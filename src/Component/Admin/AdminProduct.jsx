import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link ,useNavigate} from 'react-router-dom'
import  Button  from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProduct } from '../Store/ActionCreators/ProductActionCreators';

export default function AdminProduct() {
  var product=useSelector((item)=>item.ProductStateData)
  var dispatch=useDispatch()
  var navigate=useNavigate()
  var columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'maincategory', headerName: 'Maincategory', width: 100 },
    { field: 'subcategory', headerName: 'Subcategory', width: 100 },
    { field: 'brand', headerName: 'Brand', width: 100 },
    { field: 'color', headerName: 'Color', width: 70 },
    { field: 'size', headerName: 'Size', width: 70 },
    { field: 'baseprice', headerName: 'Baseprice', width: 100 ,renderCell:({row})=>
  <p>&#8377;{row.baseprice}</p>},
    { field: 'discount', headerName: 'Discount', width: 70 },
    { field: 'finalprice', headerName: 'Final price', width: 100,renderCell:({row})=>
    <p>&#8377;{row.finalprice}</p>},
    { field: 'stock', headerName: 'Stock', width: 100 },
    { field: 'pic1', headerName: 'Pic 1', width: 110 ,renderCell:({row})=>
    <img src={`/assets/images/${row.pic1}`} height="50px" width="100%" className='rounded' alt=''/>},
    { field: 'pic2', headerName: 'Pic 2', width: 110 ,renderCell:({row})=>
    <img src={`/assets/images/${row.pic2}`} height="50px" width="100%" className='rounded' alt=''/>},
    { field: 'pic3', headerName: 'Pic 3', width: 110 ,renderCell:({row})=>
    <img src={`/assets/images/${row.pic3}`} height="50px" width="100%" className='rounded' alt=''/>},
    { field: 'pic4', headerName: 'Pic 4', width: 110 ,renderCell:({row})=>
    <img src={`/assets/images/${row.pic4}`} height="50px" width="100%" className='rounded' alt=''/>},
    {
      field:"edit", 
      headerName:"Edit",
      sortable:false,
      renderCell:({row})=>
        <Button onClick={()=>{
          navigate("/admin-update-product/"+ row.id )
        }} ><span className='material-symbols-outlined'>edit</span>
        </Button>,  
    },
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=>
      <button onClick={()=>dispatch(deleteProduct({id:row.id}))}>
      <span className='material-symbols-outlined'>delete_forever</span>
      </button>
    }
  ];
  
  var rows = []
  for(let item of product){
    rows.push(item)
  }
  
  useEffect(()=>{
    dispatch(getProduct())
  },[])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                    <h5 className='bg-secondary text-center text-light p-2'>Product<Link to="/admin-add-product" className='float-right' ><span className="material-symbols-outlined text-light">add</span></Link></h5>
                    <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 5 },
                        },
                      }}
                      pageSizeOptions={[5, 10]}
                    //   checkboxSelection
                    />
                  </div>
                    </div>
                </div>
            </div>
        </>
    )
}
