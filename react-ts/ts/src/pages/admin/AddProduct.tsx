import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProductPage = (props) => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const onHandleSubmit = data => {
        props.onAdd(data);
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}
export default AddProductPage