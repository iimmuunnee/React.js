import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDetail = () => {

    // useParams는 객체형태여서 그 안에서 내가 사용할 pro_no만 가져오겠다 / props에서 값을 가져오는 방법과 동일
    const {pro_no} = useParams() 

    // useParams()는 URL 파라미터로부터 넘겨받은 값을 객체로 반환해주기 때문에 
    // const {파라미터1, 파라미터2, ...} = useParams() 로 파라미터 이름을 사용해서 가져온다.

  return (
    <div>
        <h1>ProductDetail</h1>
        <p>상품번호 : {pro_no}</p>
        <Link to={'/'}>Home 페이지로 이동하기!</Link>
    </div>
  )
}

export default ProductDetail