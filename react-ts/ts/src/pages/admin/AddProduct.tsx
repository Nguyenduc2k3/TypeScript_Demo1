// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Button, Checkbox, Form, Input, Upload } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import TextArea from 'antd/es/input/TextArea';

// const AddProductPage = (props) => {
//     const navigate = useNavigate();
//     const onFinish = (values: any) => {
//         props.onAdd(values);
//         navigate('/admin/products')
//     };

//     const onFinishFailed = (errorInfo: any) => {
//         console.log('Failed:', errorInfo);
//     };

//     const { register } = useForm();

//     return (
//         <div>
//             <h1>THÊM SẢN PHẨM</h1>
//             <Form
//                 name="basic"
//                 labelCol={{ span: 8 }}
//                 wrapperCol={{ span: 16 }}
//                 style={{ maxWidth: 800, margin: '0 auto' }}
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Product Name"
//                     name="name"
//                     rules={[{ required: true, message: 'Please input name!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Product Price"
//                     name="price"
//                     rules={[{ required: true, message: 'Please input price!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Product Image"
//                     name="image"
//                     rules={[{ required: true, message: 'Please input link image!' }]}
//                 >
//                     <Input/>
//                 </Form.Item>
//                 <Form.Item
//                     label="Description"
//                     name="description"
//                     rules={[{ required: true, message: 'Please input description!' }]}
//                 >
//                     <TextArea />
//                 </Form.Item>

//                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                     <Button type="primary" htmlType="submit">
//                         Add New Product
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     )
// }

// export default AddProductPage

import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;
type Props = {
  onAdd: () => void;
  categories: { id: number; name: string }[];
};

const AddProductPage = ({ onAdd, categories }: Props) => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await onAdd(values);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const data = categories ? categories.map((item: any) => {
    return {
      value: item.id,
      label: item.name,
    };
  }): [];

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name Product"
        name="name"
        rules={[{ required: true, message: "Please input your name product!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input your price!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Link ảnh" name="image" rules={[{ required: true }]}>
        <Input placeholder="Link ảnh" />
      </Form.Item>
      <Form.Item
        label="Category Product"
        name="categoryId"
        rules={[{ required: true, message: "Please input your category!" }]}
      >
        <Select
          showSearch
          placeholder="Select a category"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={data}
        />
      </Form.Item>
      <Form.Item
        label="Description Product"
        name="description"
        rules={[
          { required: true, message: "Please input your description!" },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add New Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductPage;

