import { useState } from 'react'
import Additem from './Additem'
import Listitem from './Listitem'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// or less ideally


const Todo = () => {
  const [item,setItem]=useState([])

  const additem=(name)=>{
    const newItem=[...item,{name}];
    setItem(newItem)

// const del=(index)=>{
//   const newItem=[...item]
//   newItem.splice(index,1)
//   setItem(newItem)
  // }


  }
  const del=(index)=>{
  const newItem=[...item];
  newItem.splice(index,1);
  setItem(newItem);
  }
  return (
    <>
        <div>
        <div>  <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>Todo</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Add</Nav.Link>
            <Nav.Link href="#">Delete</Nav.Link>

          </Nav>
        </Container>
      </Navbar></div>
           
            <div >
                <Additem  additem={additem} />
            </div>
          <div>
             {item.map((itm,index)=>(<Listitem itm={itm} del={del} index={index} key={index}/>))}
          </div>
                
         </div>
        
    </>
  )
  
}

export default Todo