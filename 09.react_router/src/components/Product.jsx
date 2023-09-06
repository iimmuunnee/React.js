import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()

    const goToProductDetail2 = () => {
        navigate("/productDetail2?cate=shirt")
    }
  return (
    <div>
        <h1>Product</h1>
        <button onClick={goToProductDetail2}>상세페이지로 이동</button>
    </div>
  )
}

export default Product