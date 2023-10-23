import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link ,useNavigate} from 'react-router-dom'
import  Button  from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand, getBrand } from '../Store/ActionCreators/BrandActionCreators';

export default function AdminBrand() {
  var brand=useSelector((item)=>item.BrandStateData)
  var dispatch=useDispatch()
  var navigate=useNavigate()
  var columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    {
      field:"edit", 
      headerName:"Edit",
      sortable:false,
      renderCell:({row})=>
        <Button onClick={()=>{
          navigate("/admin-update-brand/"+ row.id )
        }} ><span className='material-symbols-outlined'>edit</span>
        </Button>,  
    },
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=>
      <button onClick={()=>dispatch(deleteBrand({id:row.id}))}>
      <span className='material-symbols-outlined'>delete_forever</span>
      </button>
    }
  ];
  
  var rows = []
  for(let item of brand){
    rows.push(item)
  }
  
  useEffect(()=>{
    dispatch(getBrand())
  },[])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                    <h5 className='bg-secondary text-center text-light p-2'>Brand<Link to="/admin-add-brand" className='float-right' ><span className="material-symbols-outlined text-light">add</span></Link></h5>
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
