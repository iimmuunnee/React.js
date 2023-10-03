import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const {id} = useParams() 
  console.log(id);


  return (
    <div>
      <div className='movieDetail'>

      </div>
    </div>
  )
}

export default MovieDetail