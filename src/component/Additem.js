import React, { useState } from 'react'
import './Todo.css'
import Button from 'react-bootstrap/Button';

const Additem = ({additem}) => {
    const [add, setAdd] = useState([])
    // const addref = useRef()
    // const click = () => {
    //     const a = addref.current.value
    //     setAdd([...add, a])

  
    // console.log(add);
    const addElement=()=>{
        additem(add)
        setAdd("")
    }

   
    return (
        <>
            <div className='input-div'>
                {/* <input type='text' ref={addref}  placeholder='enter the item'/>
                
                <Button variant="success"onClick={click} >ADD</Button>{' '}

                <div>
                    {
                        add.map((x, i) => {

                            
                    return (<li>{x}<Button variant="danger" onClick={() => setAdd(add.filter((a,j) => j !== i))}>Delete</Button></li>)
                        })
                    } */}


                    <input type='text' 
                    value={add}
                        onChange={(e)=>{setAdd(e.target.value)}}
                    />
<Button variant="primary" onClick={addElement} >ADD</Button>               
 </div>

           
        </>
    )
                }

export default Additem