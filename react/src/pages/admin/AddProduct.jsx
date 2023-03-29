import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate()
    // const addNewProduct = () => {
    //     const newProduct = {
    //         "name": document.querySelector("#prdName").value,
    //     }
    //     try {
    //         props.onAdd(newProduct)
    //         navigate('/admin/products')
    //     } catch (error) { 
    //         console.log(error);
    //     }
    // }
    const [inputValue, setInputValue] = useState([])
    const onHandleChange = (e) => {
        const name = e.target.name;
        setInputValue({ ...inputValue, [name]: e.target.value});
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const name = document.forms["myForm"]["prdName"].value;
        if (name == "") {
            alert("Vui lòng không để trống tên sản phẩm");
            return false
        }
        const price = document.forms["myForm"]["price"].value;
        if (price == "") {
            alert("Vui lòng không để trống giá sản phẩm");
            return false
        }
        props.onAdd(inputValue);
        navigate('/admin/products')
    }
    return ( 
        <div>
            <form name='myForm' action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Tên sản phẩm' id='prdName' onChange={onHandleChange} name='name' />
                <input type="number" placeholder='Giá' onChange={onHandleChange} name='price' />
                <button type='submit'>Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage