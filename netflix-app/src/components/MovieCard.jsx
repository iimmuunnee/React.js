import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import axios from '../api'
import { useSelector } from 'react-redux';

const MovieCard = ({ info }) => {

  const {genreList} = useSelector((state) => state.movie)
  console.log(genreList);

  const backgroundImg = info.poster_path
  const movieTitle = info.title
  const movieGenre = info.genre_ids
  const movieVote_average = info.vote_average
  const movieAdult = info.adult


  const div_Style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${backgroundImg})`,
    margin: "10px",
    height: "200px",
    width: "350px",
  }

  return (
    <div style={div_Style} className='movieCard'>
      <div className='movieInfobox'>
        <div className='movieInfo'>
          <h2>{movieTitle}</h2>
          <Stack direction="horizontal" gap={2}>
            {movieGenre.map((item) => {
              <Badge bg="danger" key={item}>
                
              </Badge>
            })}
          </Stack>
          <p style={{fontWeight : "bold"}}>평점 : {movieVote_average} | {movieAdult?"성인":"청소년"}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard