import { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Productcontext } from '../context/Productcontext'
import Addform from './Addform'
import Pagination from './Pagination'
import Product from './Product'




const Productlist = () => {
   const {data} = useContext(Productcontext)
   const [show ,setShow] = useState(false)
   const [currentPage, setCurrentpage] = useState(1)
   const [productperpage] = useState(4)

   const showadd =()=>{
    setShow(true)
   }

   const showclose =()=>{
    setShow(false)
   }

   const indexOfProduct = currentPage * productperpage
   const indexOffirstproduct = indexOfProduct - productperpage
   
   const currentPages = data.slice(indexOffirstproduct,indexOfProduct)
   const totalPagesNum = Math.ceil(data.length/productperpage)
     return (
        <>


            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Product<b>List</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={showadd} className="btn btn-success rounded-3" data-toggle="modal"><i className="material-icons ">&#xE147;</i> <span>Export to file</span></Button>
                        <Button onClick={showadd} className="btn btn-success rounded-3" data-toggle="modal"><i className="material-icons ">&#xE147;</i> <span>import</span></Button>
                        <Button onClick={showadd} className="btn btn-success rounded-3" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add Product</span></Button>
                    </div>
                </div>
            </div>


            <table className="table table-striped table-hover bordered table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>discountPercentage</th>
                        <th>rating</th>
                        <th>stock</th>
                        <th>brand</th>
                        <th>category</th>
                        <th>thumbnail</th>
                        <th>images</th>
                    </tr>
                    
                </thead>
                <tbody>
                <tr>
                       
                       <td colspan="4">
                           <input type="text" placeholder='title' className='form-control'/>
                       </td>
                       <td  colspan="5"><input type="text" placeholder='title' className='form-control'/></td>
                       <td colSpan="3">
                        <Button className='mx-auto'>Search</Button>
                       </td>
                     
                   </tr>
              
                        {
                            currentPages.map(prod=>(
                                <tr key={prod.id}>

                                    <Product prod={prod}/>
                                </tr>
                            ))
                        }

             

                </tbody>
            </table>
            <Pagination pages= {totalPagesNum} setCurrentpage={setCurrentpage}/>
            <Modal show={show} onHide={showclose} >
                <Modal.Header closeButton>
                        <Modal.Title>
                            add product
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Addform/>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant ="secondary" onClick={showclose}>Close BUtton</Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default Productlist
