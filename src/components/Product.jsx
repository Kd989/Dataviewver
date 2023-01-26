import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import Edit from "./Edit"

const Product = ({prod}) => {
    const [show ,setShow] = useState(false)

    const showadd =()=>{
     setShow(true)
    }
 
    const showclose =()=>{
     setShow(false)
    }
    return (
        <>

                <td>{prod.id}</td>
                <td>{prod.title}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
                <td>{prod.discountPercentage}</td>
                <td>{prod.rating}</td>
                <td>{prod.stock}</td>
                <td>{prod.brand}</td>
                <td>{prod.category}</td>
                <td>

                      {<img src={prod.thumbnail} />}
                    </td>
                    <td>
                    {prod.images.map ((img,id)=>
                      <img src={img} key={id}/>
                    )}
                    </td>
             
                <td>
                    <Button onClick={showadd} href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
      
                </td>
                <Modal show={show} onHide={showclose} >
                <Modal.Header closeButton>
                        <Modal.Title>
                            add product
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Edit theProduct={prod}/>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant ="secondary" onClick={showclose}>Close BUtton</Button>
                </Modal.Footer>
            </Modal>
          
        </>
    )
}

export default Product
