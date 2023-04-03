// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateProductPage = (props) => {
//     const navigate = useNavigate()
//     const {id} = useParams()
//     const {register, handleSubmit, reset} = useForm()
//     useEffect(() => {
//         const currentProduct = props.products.find((product) => product.id === Number(id))
//         reset(currentProduct)
//     },[props])
//     const onHandleSubmit = data => {
//         const status = confirm("Bạn chắc chưa??")
//         if(status) {
//             props.onUpdate(data);
//             navigate('/admin/products')
//         }

//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
//                 <input type="text" {...register('name')}/>
//                 <input type="number" {...register('price')} />
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     )
// }

// export default UpdateProductPage;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const UpdateProductPage = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const currentProduct = props.products.find(
    (product) => product.id === Number(id)
  );

  useEffect(() => {
    reset(currentProduct);
  }, [props, reset, currentProduct]);

  const onFinish = (data) => {
    const status = window.confirm("Bạn chắc chưa??");
    if (status) {
      props.onUpdate({ ...data, id: currentProduct.id }); // Include the id parameter
      navigate("/admin/products");
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={currentProduct}>
      <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
        <Input placeholder="Nhập tên sản phẩm" />
      </Form.Item>
      <Form.Item label="Giá sản phẩm" name="price" rules={[{ required: true }]}>
        <Input type="number" placeholder="Nhập giá sản phẩm" />
      </Form.Item>
      <Form.Item label="Link ảnh" name="image" rules={[{ required: true }]}>
        <Input placeholder="Link ảnh" />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[{ required: true }]}>
        <TextArea placeholder="Description" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateProductPage;
