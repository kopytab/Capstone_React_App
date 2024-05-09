import React from 'react'

export default function SingleLap( {fastestlap}) {
  return (
    <div class="container text-center border-bottom">
    <div class="row pt-2 pb-2">
      <div class="col">
      <h2>Round {fastestlap.round} {fastestlap.race}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>{fastestlap.driver}</h4>
        <h4>{fastestlap.team}</h4>
      </div>
    
      <div class="col">
      <h4>{fastestlap.time}</h4>
      </div>
    </div>
  </div>
  )
}
