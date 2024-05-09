import React from 'react'

export default function SinglePitstop( {pitstop}) {
  return (
    <div class="container text-center border-bottom">
    <div class="row pt-2 pb-2">
      <div class="col">
      <h2>{pitstop.position}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>{pitstop.driver}</h4>
        <h4>{pitstop.team}</h4>
      </div>
    
      <div class="col">
      <h4>{pitstop.race}</h4>
      <h4>{pitstop.time} Sec</h4>
      </div>
    </div>
  </div>
  )
}
