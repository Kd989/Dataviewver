import { createContext } from "react";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";


export const Productcontext = createContext()

const ProductContextProvider = (props)=>{
    const [data, setData] = useState([])



    function getData() {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res.data.products);
                setData(res.data.products)
            })
    }
    useEffect(() => {
        getData()
    }, [data])

    const updateProduct = (id, updatedProdut)=>{
        setData(data.map(datas=>datas.id === id ? updatedProdut : datas))
    }
    return (
        <Productcontext.Provider value={{data}}>
            {props.children}
        </Productcontext.Provider>
    )
}

export default  ProductContextProvider;