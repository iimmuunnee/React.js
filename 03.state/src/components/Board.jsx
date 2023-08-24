import React, { useState } from 'react'

const Board = ({name, dice, comdice, score, comScore}) => {

    let dice1 = dice != undefined ? dice : comdice
    console.log(dice1);
    let $dice = `img/dice${dice1}.png`
    let $score = score != undefined ? score : comScore

  return (
    <div>
        <h4>{name}</h4>
        <img src={$dice} alt="" />
        <div className='score-area'>
            <h4>현재 점수는?</h4>
            <h4>{$score}</h4>
        </div>
    </div>
  )
}

export default Board