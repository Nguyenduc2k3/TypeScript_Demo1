// import React, { useState, useEffect } from 'react'
// import { Row, Col, Card, Button, Image } from 'antd'
// import { IProduct } from '../types/product'

// interface IProps {
//     products: IProduct[],
//     onRemove: (id: number) => void
// }

// const ProductPage = (props: IProps) => {

//     const [data, setData] = useState<IProduct[]>([])
    
//     useEffect(() => {
//         setData(props.products)
//     }, [props])
    
//     const removeProduct = (id: number) => {
//         props.onRemove(id)
//     }

//     return (
//         <div>
//             <h1>ProductPage</h1>
//             <Row gutter={[16, 16]}>
//                 {data.map((item) => (
//                     <Col key={item.id} span={6}>
//                     <Card
//                         hoverable
//                         style={{ width: 240 }}
//                         cover={<Image src={item.image} width={240} />}
//                     >
//                         <Card.Meta title={item.name} description={item.price} />
//                     </Card>
//                     </Col>
//                 ))}
//                 </Row>


//         </div>
//     )
// }

// export default ProductPage



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Image } from 'antd';
import { IProduct } from '../types/product';

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const ProductPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    
    useEffect(() => {
        setData(props.products)
    }, [props])
    

    return (
        <div>
            <h1>ProductPage</h1>
            <Row gutter={[16, 16]}>
                {data.map((item) => (
                    <Col key={item.id} span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<Image src={item.image} width={240} />}
                        >
                            <Card.Meta title={item.name} description={<span style={{ color: 'red' }}>{item.price}</span>}/>
                            <Link to={`/products/${item.id}`}>
                                <Button>View Details</Button>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProductPage;



// import React from "react";
// import { Link } from "react-router-dom";
// import { IProduct } from "../types/product";
// import "./productpage.css";
// type Props = {
//   products: IProduct[];
//   categories: [];
// };

// const ProductPage = ({ products, categories }: Props) => {
//   return (
//     <div className="product__container">
//       <h1 className="product-title">List Products</h1>
//       <div className="product-content-container">
//         <div className="product-categories">
//           <ul className="product-categories-content">
//             {categories.map((category) => (
//               <li key={category.id} className="product-category-item">
//                 <p className="category-name">{category?.name}</p>
//                 <p>Số lượng:{category?.products.length}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="product__content">
//           {products.map((product) => (
//             <Link key={product?.id} to={`${product?.id}`}>
//               <div className="product-item">
//                 <div className="product-item-left">
//                   <h5 className="product-item-name">{product?.name}</h5>
//                   <p className="product-item-price">{product?.price}</p>
//                   <p className="product-item-des">{product?.description}</p>
//                   <p className="product-item-cate">{product.categoryId}</p>
//                 </div>
//                 <div className="product-item-right">
//                   <img src="https://picsum.photos/id/237/200/300" alt="" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
