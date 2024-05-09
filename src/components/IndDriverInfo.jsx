import React from 'react'

export default function IndDriverInfo( {driverInfo}) {
  return (
    <div class="container text-center pb-4 pt-4 border-bottom ">
    <div class="row pt-2 pb-2">
      <div class="col">
      <h2>{driverInfo.driver}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>Number: {driverInfo.number}</h4>
        <h4>Team: {driverInfo.team}</h4>
      </div>
      <div class="col">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ge_1C8jvExRhg5gZetCCdxQ4vEARwWNd4UwSngivw&s'></img>
      </div>
      <div class="col">
      <h4>Home Country: {driverInfo.nationality}</h4>
      <h4>DOB: {driverInfo.dob}</h4>
      </div>
    </div>
  </div>
  )
}
