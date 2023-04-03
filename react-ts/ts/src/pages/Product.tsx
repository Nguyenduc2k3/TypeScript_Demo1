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
    
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }

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
                            <Card.Meta title={item.name} description={item.price} />
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
