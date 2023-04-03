// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getOneProduct } from "../api/product";

// const ProductDetailPage = () => {
//     const {id} = useParams()
//     const [product, setProduct] = useState({id: 0, name: '', price: 0, image: '', description: ''})
//     useEffect(() => {
//         getOneProduct(Number(id)).then(({data}) => setProduct(data))
//     }, [])
//     return (
//         <div>
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//             <img src={product.image} alt="" />
//             <p>{product.description}</p>
//         </div>
//     )
// }
// export default ProductDetailPage


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../api/product";
import { Card, Button } from "antd";

const { Meta } = Card;

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({id: 0, name: '', price: 0, image: '', description: ''})

    useEffect(() => {
        getOneProduct(Number(id)).then(({ data }) => setProduct(data));
    }, [id]);

    const handleBuy = () => {
        // Your buy logic here
        alert(`Buying product: ${product.name}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <Card
                cover={<img src={product.image} alt={product.name} />}
                style={{ width: 500 }}
            >
                <Meta title={product.name} description={product.description} />
                <p style={{ fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
                    {`Price: $${product.price}`}
                </p>
                <Button type="primary" onClick={handleBuy}>
                    Buy
                </Button>
            </Card>
        </div>
    );
};

export default ProductDetailPage;

