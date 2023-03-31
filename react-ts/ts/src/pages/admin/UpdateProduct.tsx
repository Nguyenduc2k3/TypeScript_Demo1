import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProductPage = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {register, handleSubmit, reset} = useForm()
    useEffect(() => {
        const currentProduct = props.products.find((product) => product.id === Number(id))
        reset(currentProduct)
    },[props])
    const onHandleSubmit = data => {
        const status = confirm("Bạn chắc chưa??")
        if(status) {
            props.onUpdate(data);
            navigate('/admin/products')
        }
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')}/>
                <input type="number" {...register('price')} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProductPage;