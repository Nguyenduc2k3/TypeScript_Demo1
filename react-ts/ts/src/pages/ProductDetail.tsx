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
import { SmileOutlined } from '@ant-design/icons';
import { Card, Button, notification } from "antd";

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
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
        message: 'Thông báo',
        description:
            'Bạn đã mua hàng thành công',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <Card
                cover={<img src={product.image} alt={product.name} />}
                style={{ width: 500 }}
            >
                <Meta title={product.name} description={product.description} />
                <p style={{ color:"red", fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
                    {`Price: $${product.price}`}
                </p>
                {contextHolder}
                <Button type="primary" onClick={openNotification}>
                    Buy
                </Button>
            </Card>
        </div>
    );
};

export default ProductDetailPage;

