import React, { useEffect, useState} from 'react'
import Weather from './components/Weather'
import axios from 'axios'
import SyncLoader from 'react-spinners/SyncLoader'

const Ex02 = () => {
  // 날씨 정보를 저장하는 state
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // 환경변수 파일인 .env로부터 API_KEY 가져오기
  const API_KEY = process.env.REACT_APP_API_KEY
  console.log(API_KEY)

  // 현재 위치 (위도, 경도)를 가져오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      // console.log(lat, lng);
      getCurrentWeather(lat, lng)
    })
  }

  const getCurrentWeather = async (lat, lng) => {
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    setIsLoading(true)
    let response = await axios.get(weather_url)
    // let data = await response.json()

    // axios 사용으로 json형태로 바로 받아와짐

    console.log('현재 날씨정보', response.data)
    setWeather(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    // 현재 날씨 정보 요청
    getCurrentLocation()
  }, [])

  return (
    <div>
      {isLoading ? (
        <SyncLoader
          loading={isLoading}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Weather weather={weather} />
      )}
    </div>
  )
}

export default Ex02
