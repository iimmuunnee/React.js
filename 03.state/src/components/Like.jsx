import React, { useState } from 'react'

const Like = () => {

    const [heart, setHeart] = useState("🤍")
    const [count, setCount] = useState(0)

    const handleLike = () => {
      if (heart === "🤍"){
        setHeart("❤")
        setCount(count + 1)
      }
      else if (heart === "❤") {
        setHeart("🤍")
        setCount(count - 1)
      }
    }
   
  return (
    <div>
        <span onClick={handleLike}>{heart} 좋아요</span><span> {count}개</span>
    </div>
  )
}

export default Like