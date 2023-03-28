import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const navigate = useNavigate()
    const { id } = useParams() // lấy id từ url
    const [product, setProduct] = useState({}) //khởi tạo state product 
    const [inputValue, setInputValue] = useState({}) //khởi tạo state inputValue
    useEffect(() => { //lấy product từ props.products
        const currentProduct = props.products.find(product => product.id == id)//lấy product có id trùng với id từ url
        setProduct(currentProduct) //gán lại giá trị cho biến product
    }, [props]) //chạy lại khi props thay đổi

    const onHandleChange = (e) => { //lấy giá trị từ input
        const { name, value } = e.target //lấy name và value từ input
        setInputValue({ ...inputValue, [name]: value }) //gán lại giá trị cho biến inputValue
    }
    const onHandleSubmit = (e) => { //hàm thực thi khi chạy sự kiện submit form
        const status = confirm("Bạn có muốn cập nhật không ?")
        if(status) {
            e.preventDefault()
            const updateData = { ...product, ...inputValue } //lấy giá trị từ biến product và biến inputValue
            props.onUpdate(updateData); //gọi hàm onUpdate từ props truyền vào
            navigate('/admin/products')
        }
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage