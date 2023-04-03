import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const ProductManagementPage = (props) => {
    
    const data = props.products.map((product) => {
        return {
            key: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }
    })
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const removeProduct = (id) => {
        const status = confirm("Bạn chắc chưa??")
        if (status) {
            props.onRemove(id)
        }
    }
    
    
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="product" width="100" />,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record)

                < Space size="middle" >
                    <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
                    <Button type="primary" onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space >
            ),
        },
    ];
    
    return (
        <div>
            <Space>
                <Button type="primary"><Link to="/admin/products/add">Add Product</Link></Button>
            </Space>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default ProductManagementPage