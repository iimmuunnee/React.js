import React, { useContext } from 'react'
import { NaverData } from "../App";

const BookItem = () => {
  const data = useContext(NaverData)
  let bookList = data.searchData
  console.log(bookList);

  return (
    <div>BookItem</div>
  )
}

export default BookItem