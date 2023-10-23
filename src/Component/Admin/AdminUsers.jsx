import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../Store/ActionCreators/UserActionCreators';

export default function AdminUsers() {
  var User=useSelector((item)=>item.UserStateData)
  var dispatch=useDispatch()
  var columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },
   
    {
      field:"delete",
      headerName:"Delete",
      sortable:false,
      renderCell:({row})=>
      <button onClick={()=>dispatch(deleteUser({id:row.id}))}>
      <span className='material-symbols-outlined'>delete_forever</span>
      </button>
    }
  ];
  
  var rows = []
  for(let item of User){
    rows.push(item)
  }
  
  useEffect(()=>{
    dispatch(getUser())
  },[])
    return (
        <>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-lg-2 col-12'>
                        <Leftnav />
                    </div>
                    <div className='col-lg-10 col-12'>
                    <h5 className='bg-secondary text-center text-light p-2'>User</h5>
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
