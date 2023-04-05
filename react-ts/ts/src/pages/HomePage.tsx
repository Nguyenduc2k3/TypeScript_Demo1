//  import React, { useEffect, useState } from "react";
//  import { Link } from "react-router-dom";
//  import { Card, Col, Row } from "antd";
//  import { IProduct } from "../types/product";
//  import { getAllProduct } from "../api/product";

//  const { Meta } = Card;

//  const HomePage = () => {
//      const [products, setProducts] = useState<IProduct[]>([]);

//      useEffect(() => {
//          getAllProduct().then(({ data }) => setProducts(data));
//      }, []);

//      return (
//          <div style={{ padding: "20px" }}>
//              <Row gutter={[16, 16]}>
//                  {products.map((product) => (
//                      <Col span={6} key={product.id}>
//                          <Link to={`/products/${product.id}`}>
//                              <Card
//                                  hoverable
//                                  cover={<img src={product.image} alt={product.name} />}
//                              >
//                                  <Meta title={product.name} description={`$${product.price}`} />
//                              </Card>
//                          </Link>
//                      </Col>
//                  ))}
//              </Row>
//          </div>
//      );
//  };

//  export default HomePage;


import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./homepage.css"
import { Outlet } from "react-router-dom";
import banner from "../assets/banner.jpg";
const { Header, Content, Footer } = Layout;
const { Item } = Menu;
type Props = {};

const HomePage = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="layoutClient__container">
      <Layout className="layout">
        <Header>
          <div className="LogoClient"></div>
          <Menu>
            <Item key={"home"}>
              <Link to={"/"}>Home</Link>
            </Item>
            <Item key={"products"}>
              <Link to={"/products"}>Products</Link>
            </Item>
            <Item key={"signin"}>
              <Link to={"/admin"}>Login</Link>
            </Item>
            <Item key={"signup"}>
              <Link to={"/admin/register"}>Signup</Link>
            </Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div
            className="site-layout-content"
            style={{ background: colorBgContainer }}
          >
            <div className="banner__container">
              <img src={banner} alt="" />
            </div>
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
            <div className="footer-layout">Nguyễn Trọng Đức</div>
          </Footer>
      </Layout>
    </div>
  );
};

export default HomePage;
