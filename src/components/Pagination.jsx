import React, { useEffect, useState } from 'react'

const Pagination = ({pages,setCurrentpage}) => {
    // const pages = 1;
    const numofPages = []
    for (let i = 1; i <= pages; i++) {
        numofPages.push(i)
    }
    const [currentBtn, setCurrentBtn] = useState(1)

    useEffect(()=>{
        setCurrentpage(currentBtn)
    },[currentBtn,setCurrentpage])
    return (
        <div className="clearfix d-flex justify-content-center flex-column align-items-center">
            <ul className="pagination">
                <li className={`${currentBtn === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!"
                    onClick={() => setCurrentBtn((prev) => prev === 1 ? prev : prev - 1)}
                >Previous</a></li>
              {  numofPages.map((page,index)=>{
                    return(
<li key={index}className={`${currentBtn === page ? 'page-item active' : 'page-item'}`}><a href="#!" className="page-link" onClick={()=>setCurrentBtn(page)}>{page}</a></li>
                    )
                })}
                <li className={`${currentBtn === numofPages.length ? 'page-item disabled' : 'page-item'}`}><a href="#!"
                    onClick={() => setCurrentBtn((next) => next === numofPages.length ? next : next + 1)}
                >next</a></li>


            </ul>
            <div className="hint-text mt-2" >Showing <b>5</b> out of <b>25</b> entries</div>
        </div>
    )
}

export default Pagination
{/* 
        
        <li className="page-item"><a href="#!" className="page-link">2</a></li>
        <li className="page-item active"><a href="#!" className="page-link">3</a></li>
        <li className="page-item"><a href="#!" className="page-link">4</a></li>
        <li className="page-item"><a href="#!" className="page-link">5</a></li>
        <li className="page-item"><a href="#!" className="page-link">Next</a></li> */}