import { useEffect, useState } from 'react'

const ProductPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }

    return (
        <div>
            <h1>ProductPage</h1>
            <div>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <button onClick={() => removeProduct(item.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPage