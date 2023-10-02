import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { NaverData } from '../App'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";

const Search = () => {

  const data = useContext(NaverData)
  const [keyword, setKeyword] = useState()

  const navigate = useNavigate()

  const getData = (cate) => {
    
    navigate(`/${cate}`)

    axios.get(`/v1/search/${cate}.json`,
      {
        params: { query: keyword, sort: "sim" },
        headers: {
          "X-Naver-Client-Id": "ExhLK06gss0NOV2OlS4Y",
          "X-Naver-Client-Secret": "YxM1GCAXP8",
        }
      })
      .then((res) => {
        data.setSearchData(res.data.items)
      })
  }

  return (
    <div>
      <InputGroup size="lg" style={{marginBottom:"10px"}}>
            <InputGroup.Text id="inputGroup-sizing-lg">KeyWord</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => { setKeyword(e.target.value) }}
            />
          </InputGroup>

          <Button variant="primary" size="lg" onClick={() => { getData("book") }}>
              Search
          </Button>
    </div>
  )
}

export default Search