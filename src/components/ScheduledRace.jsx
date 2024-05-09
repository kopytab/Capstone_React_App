import React from 'react'
import { Container, Stack } from 'react-bootstrap'

export default function ScheduledRace( {schedule}) {
  return (
    <div class="container text-center border-bottom rounded m-4 pb-4">
    <div class="row pt-2 pb-2">
      <div class="col">
      <h2>Round {schedule.round} {schedule.country} </h2>
      </div>
      <div class="col">
        <h2>{schedule.datespan}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>FP1 {schedule.fp1}</h4>
        <h4>FP2 {schedule.fp2}</h4>
      </div>
      <div class="col">
      <h4>FP3 {schedule.fp3}</h4>
      <h4>Qualifying {schedule.qual}</h4>
      </div>
      <div class="col">
      <h4>Race {schedule.race}</h4>
      </div>
    </div>
  </div>
  )
}
