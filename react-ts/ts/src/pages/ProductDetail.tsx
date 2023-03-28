import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../api/product";

const ProductDetailPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({id: 0, name: '', price: 0})
    useEffect(() => {
        getOneProduct(Number(id)).then(({data}) => setProduct(data))
    }, [])
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductDetailPage