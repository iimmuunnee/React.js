import React, { useRef } from 'react'
import { ContactReducerActions } from '../redux/reducers/contactSlice'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const dispatch = useDispatch()

  const inputRef = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      ContactReducerActions.searchContact({keyword : inputRef.current.value}),
    )
    inputRef.current.value = ''
    inputRef.current.focus()
  }

return (
  <div>
    <form className="contact-search-box">
      <p>
        <input
          type="text"
          placeholder="검색할 키워드를 입력하세요."
          ref={inputRef}
        />
      </p>
      <p>
        <input type="submit" onClick={handleSubmit} value="찾기" />
      </p>
    </form>
  </div>
)
}

export default SearchBox