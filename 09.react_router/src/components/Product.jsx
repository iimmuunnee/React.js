import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()

    const goToProductDetail2 = () => {
        navigate("/productDetail2?cate=shirt")
    }
  return (
    <div>
        <h1>Product</h1>
        <button onClick={goToProductDetail2}>상세페이지로 이동</button>
        <Link to={'/'}>Home 페이지로 이동하기!</Link>
    </div>
  )
}

export default Product