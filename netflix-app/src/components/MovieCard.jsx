import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import axios from '../api'
import { useSelector } from 'react-redux';

const MovieCard = ({ info }) => {

  const {genreList} = useSelector((state) => state.movie)
  // 장르 번호별 리스트 
  console.log(genreList);

  const backgroundImg = info.poster_path
  const movieTitle = info.title
  const movieGenre = info.genre_ids // 영화 별 장르 리스트
  const movieVote_average = info.vote_average
  const movieAdult = info.adult


  const div_Style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${backgroundImg})`,
    margin: "10px",
    height: "330px",
    width: "220px",
  }

  return (
    <div style={div_Style} className='movieCard'>
      <div className='movieInfobox'>
        <div className='movieInfo'>
          <h2>{movieTitle}</h2>
          <Stack direction="horizontal" gap={2}>
            {movieGenre.map((item) => (
              <Badge bg="danger" key={item}>
                {genreList.find((genre) => (
                  genre.id === item
                )).name}
              </Badge>
            ))}
          </Stack>
          <p style={{fontWeight : "bold"}}>평점 : {movieVote_average} | {movieAdult?"성인":"청소년"}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard