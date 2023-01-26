import React, { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
// import { Productcontext } from '../context/Productcontext'
// import { useContext } from 'react'


const Edit = ({theProduct}) => {
    // const id = theProduct.id

    const [title ] = useState(theProduct.title)
    const [description ] = useState(theProduct.description)
    const [price ] = useState(theProduct.price)
    const [discountPercentage ] = useState(theProduct.discountPercentage)
    const [stock ] = useState(theProduct.stock)
    const [brand ] = useState(theProduct.brand)
    const [category ] = useState(theProduct.category)
    

   
   
    
    return (
        <Form >
            <Form.Group>
                <Form.Control type='text' placeholder='title *' required value={title} />
                

               
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='description *' required value={description}/>

                
            </Form.Group>
            <Form.Group>
                <Form.Control type='textarea' placeholder='price *' row={3} value={price} />

               
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='brand *' value={brand}/>

                
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='stock *' value={stock}/>

                
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='discountPercentage *' value={discountPercentage}/>

                
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='category *' value={category}/>

                
            </Form.Group>
            
        </Form>
    )
}

export default Edit