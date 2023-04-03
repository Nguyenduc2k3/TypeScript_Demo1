import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { IProduct } from "../types/product";
import { getAllProduct } from "../api/product";

const { Meta } = Card;

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getAllProduct().then(({ data }) => setProducts(data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <Row gutter={[16, 16]}>
                {products.map((product) => (
                    <Col span={6} key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <Card
                                hoverable
                                cover={<img src={product.image} alt={product.name} />}
                            >
                                <Meta title={product.name} description={`$${product.price}`} />
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomePage;
