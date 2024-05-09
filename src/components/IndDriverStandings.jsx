import React from 'react'
import { Stack } from 'react-bootstrap'

export default function IndDriverStandings({driverstand}) {
    console.log(driverstand)
  return (
    <div class="container text-center border rounded">
  <div class="row">
    <div class="col mt-2">
      <h4>{driverstand.position}</h4>
    </div>
    <div class="col mt-2">
      <h4>{driverstand.driver}</h4>
    </div>
    <div class="col mt-2">
      <h4>{driverstand.nationality}</h4>
    </div>
    <div class="col mt-2">
      <h4>{driverstand.team}</h4>
    </div>
    <div class="col mt-2">
      <h4>{driverstand.points}</h4>
    </div>
  </div>
</div>
  )
}
