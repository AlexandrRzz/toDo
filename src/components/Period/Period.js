import React from 'react';
import './Period.css';
import {getWeek} from '../../helpers/helpers.date';

function formatDate(dateStart, dateEnd, period = 1) {
  const monthNames = [
    {fullName:"January", shortName:"Jan"},
    {fullName:"February", shortName:"Feb"},
    {fullName:"March", shortName:"Mar"},
    {fullName:"April", shortName:"Apr"},
    {fullName:"May", shortName:"May"},
    {fullName:"June", shortName:"Jun"},
    {fullName:"July", shortName:"Jul"},
    {fullName:"August", shortName:"Aug"},
    {fullName:"September", shortName:"Sep"},
    {fullName:"October", shortName:"Oct"},
    {fullName:"November", shortName:"Nov"},
    {fullName:"December", shortName:"Dec"}
  ];

  const dayNames = [
    {fullName: "Sunday", shortName: "Sun"},
    {fullName: "Monday", shortName: "Mon"},
    {fullName: "Tuesday", shortName: "Tue"},
    {fullName: "Wednesday", shortName: "Wed"},
    {fullName: "Thursday", shortName: "Thu"},
    {fullName: "Friday", shortName: "Fri"},
    {fullName: "Saturday", shortName: "Sat"}
  ];
  switch(period) {
    case 1:
      return {
        header: dayNames[dateStart.getDay()].fullName, 
        subheader: `${monthNames[dateStart.getMonth()].shortName} ${dateStart.getDate()}, ${dateStart.getFullYear()}`
      }
    case 2:
        return {
          header: `${getWeek(dateStart)} week of ${dateStart.getFullYear()}`, 
          subheader: `${monthNames[dateStart.getMonth()].shortName} ${dateStart.getDate()} - ${monthNames[dateEnd.getMonth()].shortName} ${dateEnd.getDate()}`
        } 
    case 3:
      return {
        header: `${monthNames[dateStart.getMonth()].fullName}, ${dateStart.getFullYear()}`, 
        subheader: `${monthNames[dateStart.getMonth()].shortName} ${dateStart.getDate()}, ${dayNames[dateStart.getDay()].shortName} - ${monthNames[dateEnd.getMonth()].shortName} ${dateEnd.getDate()}, ${dayNames[dateEnd.getDay()].shortName}`
      }   
    case 4:
      return {
        header: dateStart.getFullYear(), 
        subheader: `${monthNames[dateStart.getMonth()].shortName} ${dateStart.getDate()}, ${dayNames[dateStart.getDay()].shortName} - ${monthNames[dateEnd.getMonth()].shortName} ${dateEnd.getDate()}, ${dayNames[dateEnd.getDay()].shortName}`
      }
    default:
      return {
        header: "", 
        subheader: ""
      }  
  }

}

export default function Period ({dateStart, dateEnd, period, toglePeriod}) {
  const periodName = formatDate(dateStart, dateEnd, period);
  return (
    <div className="date">
      <i 
        className="fas fa-angle-left date_slide"
        onClick={()=>toglePeriod('prev')}  
      ></i>
      <div className="date_caption">
        <h2 className="date__header">{periodName.header}</h2>
        <h3 className="date__subheader">{periodName.subheader}</h3>
      </div>
      <i 
        className="fas fa-angle-right date_slide"
        onClick={()=>toglePeriod('next')} 
      ></i>
    </div>
  )
};