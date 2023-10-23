import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContact } from '../Store/ActionCreators/ContactActionCreators';
import { useNavigate } from 'react-router-dom';

export default function AdminContacts() {
  var Contact = useSelector((item) => item.ContactStateData)
  var dispatch = useDispatch()
  var navigate = useNavigate()
  var columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'subject', headerName: 'Subject', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'time', headerName: 'Date', width: 130 },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      renderCell: ({ row }) =>
        <button onClick={() => navigate("/admin-single-contact/" +row.id)}>
          <span className='material-symbols-outlined'>visibility</span>
        </button>
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: ({ row }) => {
        if (row.status === "Done") {
          return <button onClick={() => dispatch(deleteContact({ id: row.id }))}>
          <span className='material-symbols-outlined'>delete_forever</span>
        </button>
        }
      }
    },
  ];

  var rows = []
  for (let item of Contact) {
    rows.push(item)
  }

  useEffect(() => {
    dispatch(getContact())
  }, [])
  return (
    <>

      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-lg-2 col-12'>
            <Leftnav />
          </div>
          <div className='col-lg-10 col-12'>
            <h5 className='bg-secondary text-center text-light p-2'>Contact</h5>
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
