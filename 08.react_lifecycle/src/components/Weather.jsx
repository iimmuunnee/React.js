import React from 'react'

const Weather = ({weather}) => {
  console.log(weather);
  let icon = weather?.weather[0].icon
  console.log(icon);

  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let date = today.getDate()

  // console.log(year, month, date);


  let img = `https://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <div>
      <h2>오늘 날짜 : {year}년 {month}월 {date}일</h2>
        <img src= {img}/>
        <h1>
          현재 {weather?.name}의 기온은 {weather?.main.temp}°C입니다.
        </h1>
    </div>
  )
}

export default Weather