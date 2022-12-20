import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function Calender() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
<h3 style={{color:"#000ff0"}}>We will contact you on date <b>{moment(dateState).format('MMMM Do YYYY')}</b> between 10:00AM to 09:00PM</h3>


    </>
  )
}