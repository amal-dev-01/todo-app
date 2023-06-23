import React from 'react'
import { Button } from 'react-bootstrap'

const Listitem = ({itm,del,index}) => {
  return (
    <>
    <div className='div-list'>
    <div className='del-div'>{itm.name}</div>
       <div><Button variant="danger" onClick={()=>{del(index)}}>Delete</Button></div> 
    </div>

    </>
  )
}

export default Listitem