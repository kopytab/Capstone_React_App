import React from 'react'
import { Stack } from 'react-bootstrap'

export default function IndConstructorStandings({conststand}) {
    console.log(conststand)
  return (
    <div class="container text-center border rounded">
  <div class="row">
    <div class="col mt-2">
      <h4>{conststand.position}</h4>
    </div>
    <div class="col mt-2">
      <h4>{conststand.team}</h4>
    </div>
    <div class="col mt-2">
      <h4>{conststand.points}</h4>
    </div>
  </div>
</div>
  )
}
