import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import { Link ,useNavigate} from 'react-router-dom'
import  Button  from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubcategory, getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators';

export default function AdminSubcategory() {
  var subcategory=useSelector((item)=>item.SubcategoryStateData)
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
          navigate("/admin-update-subcategory/"+ row.id )
        }} ><span className='material-symbols-outlined'>edit</span>
        </Button>,  
    },
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=>
      <button onClick={()=>dispatch(deleteSubcategory({id:row.id}))}>
      <span className='material-symbols-outlined'>delete_forever</span>
      </button>
    }
  ];
  
  var rows = []
  for(let item of subcategory){
    rows.push(item)
  }
  
  useEffect(()=>{
    dispatch(getSubcategory())
  },[])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                    <h5 className='bg-secondary text-center text-light p-2'>Subcategory<Link to="/admin-add-subcategory" className='float-right' ><span className="material-symbols-outlined text-light">add</span></Link></h5>
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
