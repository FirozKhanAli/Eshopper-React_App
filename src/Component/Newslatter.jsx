import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewslatter ,getNewslatter} from './Store/ActionCreators/NewslatterActionCreators'

export default function Newslatter() {
    var dispatch=useDispatch()
    var newslatter=useSelector((state)=>state.NewslatterStateData)
    var [email,setemail]=useState("")
    var [msg,setmsg]=useState("")
    var [show,setshow]=useState(false)
    function getData(e){
        setemail(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        var d=newslatter.find((item)=>item.email===email)
        if(d){
            setshow(true)
            setmsg("Your Email Id is Already Subscribed Our Services!!!")
        }
     else{
      dispatch(addNewslatter({email:email}))
      setshow(true)
      setmsg("Thanks For Subscribe Our Services!!!")
     }
    }
    useEffect(()=>{
        dispatch(getNewslatter())
    },[newslatter.length])
  return (
    <section className="ftco-section testimony-section p-2">
    <div className="container w-50">
    {
        show ? <div className="alert alert-success text-center alert-dismissible fade show" role="alert">
         {msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div> : ""
    }
      <form onSubmit={postData}>
        <h4 className='text-center'>Subscribe Our Services</h4>
        <div className='mb-3'>
          <input type='email' name='email' placeholder='Enter Email Address' onChange={getData} className='form-control' />
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-secondary text-center p-2 w-100 rounded-0'>Submit</button>
        </div>
      </form>
    </div>

  </section>
  )
}
