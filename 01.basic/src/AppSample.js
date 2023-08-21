
function AppSample(){
    let name = prompt("이름을 입력하세요")
    let weather;
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if(month >= 3 && month <= 5){
        weather = "봄"
    }
    else if (month >= 6 && month <= 8){
        weather = "여름"
    }
    else if (month >= 9 && month <= 11){
        weather = "가을"
    }
    else{
        weather = "겨울"
    }
    console.log(month);
    return(
        <div style={{padding : "20px"}}>
            <div style={{fontSize : "30px", fontWeight : "bold"}}>
                오늘 날짜 : {year}.{month}.{day}
            </div>
            <hr></hr>
            <div style={{fontWeight : "bold"}}>
                {name}님 지금은 {weather}입니다. 좋은 하루 보내세요!
            </div>
        </div>
    )
}

export default AppSample