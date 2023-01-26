import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Productcontext } from '../context/Productcontext'
import { useContext } from 'react'


const Addform = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control type='text' placeholder='name *' required>

                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type='email' placeholder='email *' required>

                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type='textarea' placeholder='desciption *' row={3} >

                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='phone *' >

                </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" block>submit</Button><Button variant="success" type="submit" block>edit product</Button>
        </Form>
    )
}

export default Addform
