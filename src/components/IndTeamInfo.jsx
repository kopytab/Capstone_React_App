import React from 'react'
import { Stack } from 'react-bootstrap'

export default function IndTeamInfo( {teamInfo}) {
  return (
    <div class="container text-center pb-4 pt-4 border-bottom ">
    <div class="row pt-2 pb-2">
      <div class="col">
      <h2>{teamInfo.fullname}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>Driver 1: {teamInfo.driver1}</h4>
        <h4>Driver 2: {teamInfo.driver2}</h4>
        <h4>Team Cheif: {teamInfo.teamcheif}</h4>
      </div>
      <div class="col">

        <Stack direction='horizontal'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ge_1C8jvExRhg5gZetCCdxQ4vEARwWNd4UwSngivw&s'></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ge_1C8jvExRhg5gZetCCdxQ4vEARwWNd4UwSngivw&s'></img>

        </Stack>
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ge_1C8jvExRhg5gZetCCdxQ4vEARwWNd4UwSngivw&s'></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ge_1C8jvExRhg5gZetCCdxQ4vEARwWNd4UwSngivw&s'></img> */}

      </div>
      <div class="col">
      <h4>Base: {teamInfo.base}</h4>
      <h4>First Entry: {teamInfo.firstentry}</h4>
      <h4>World Championships: {teamInfo.championships}</h4>
      </div>
    </div>
  </div>
  )
}
