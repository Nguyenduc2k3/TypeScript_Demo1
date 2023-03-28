import React, { useEffect } from 'react'
import { useState } from 'react'


const HomePage = () => {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    return (
        <div>
            {count}
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default HomePage