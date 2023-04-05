// import React from 'react'
// import { Space, Table, Tag, Button } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import { Link } from 'react-router-dom';

// const ProductManagementPage = (props) => {
    
//     const data = props.products.map((product) => {
//         return {
//             key: product.id,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             description: product.description
//         }
//     })
//     interface DataType {
//         key: string;
//         name: string;
//         age: number;
//         address: string;
//         tags: string[];
//     }

//     const removeProduct = (id) => {
//         const status = confirm("Bạn chắc chưa??")
//         if (status) {
//             props.onRemove(id)
//         }
//     }
    
    
//     const columns: ColumnsType<DataType> = [
//         {
//             title: 'Product Name',
//             dataIndex: 'name',
//             key: 'name',
//             render: (text) => <a>{text}</a>,
//         },
//         {
//             title: 'Product Price',
//             dataIndex: 'price',
//             key: 'price'
//         },
//         {
//             title: 'Product Image',
//             dataIndex: 'image',
//             key: 'image',
//             render: (image) => <img src={image} alt="product" width="100" />,
//         },
//         {
//             title: 'Product Descriptions',
//             dataIndex: 'description',
//             key: 'description',
//         },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (record) => (
//                 // console.log(record)

//                 < Space size="middle" >
//                     <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
//                     <Button type="primary" onClick={() => removeProduct(record.key)}>Remove</Button>
//                 </Space >
//             ),
//         },
//     ];
    
//     return (
//         <div>
//             <h1>Quản lý sản phẩm</h1>
//             <Space>
//                 <Button type="primary"><Link to="/admin/products/add">Add Product</Link></Button>
//             </Space>
//             <Table columns={columns} dataSource={data} />
//         </div>
//     );
// }

// export default ProductManagementPage


import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../types/product";
import { Link } from "react-router-dom";
type Props = {
  products: IProduct[];
  categories: [];
  onRemove: () => void;
};

const ProductManagementPage = ({ products, categories, onRemove }: Props) => {
  const data = products.map((product) => {
    return {
      key: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryId: product.categoryId,
      description: product.description,
    };
  });
  interface DataType {
    key: string;
    name: string;
    price: number;
    image: string;
    description: string;
    categoryId: string[];
  }
  const onHandleRemove = (id: number | string) => {
    const status = confirm("Bạn chắc chưa???")
    if(status) {
        onRemove(id);
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name Product",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price Product",
      dataIndex: "price",
      key: "price",
    },
    {
        title: "Image Product",
        dataIndex: "image",
        key: "image",
        render: (image) => <img src={image} alt="product" width="100" />,
      },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={`/admin/products/${record.key}/update`}>Edit</Link>{" "}
          </Button>
          <Button
            type="primary"
            danger
            ghost
            onClick={() => onHandleRemove(record.key)}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  return (
            <div>
                <h1>Quản lý sản phẩm</h1>
                <Space>
                    <Button type="primary"><Link to="/admin/products/add">Add Product</Link></Button>
                </Space>
                <Table columns={columns} dataSource={data} />
            </div>
        );
};

export default ProductManagementPage;
