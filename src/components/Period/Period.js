import React from 'react';
import './Period.css';

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
          header: `X week of ${dateStart.getFullYear()}`, 
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

export default function Period ({dateStart, dateEnd, period}) {
  const periodName = formatDate(dateStart, dateEnd, period);
  return (
    <div className="date">
    <svg
    className="date_slide"
    viewBox="0 0 66.91 122.88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"	
    >
      <path d="M64.96,111.2c2.65,2.73,2.59,7.08-0.13,9.73c-2.73,2.65-7.08,2.59-9.73-0.14L1.97,66.01l4.93-4.8l-4.95,4.8 c-2.65-2.74-2.59-7.1,0.15-9.76c0.08-0.08,0.16-0.15,0.24-0.22L55.1,2.09c2.65-2.73,7-2.79,9.73-0.14 c2.73,2.65,2.78,7.01,0.13,9.73L16.5,61.23L64.96,111.2L64.96,111.2L64.96,111.2z"/>
    </svg>
    <div className="date_caption">
      <h2 className="date__header">{periodName.header}</h2>
      <h3 className="date__subheader">{periodName.subheader}</h3>
    </div>
    <svg
      className="date_slide"
      viewBox="0 0 66.91 122.88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"	
      >
      <path d="M1.95,111.2c-2.65,2.72-2.59,7.08,0.14,9.73c2.72,2.65,7.08,2.59,9.73-0.14L64.94,66l-4.93-4.79l4.95,4.8 c2.65-2.74,2.59-7.11-0.15-9.76c-0.08-0.08-0.16-0.15-0.24-0.22L11.81,2.09c-2.65-2.73-7-2.79-9.73-0.14 C-0.64,4.6-0.7,8.95,1.95,11.68l48.46,49.55L1.95,111.2L1.95,111.2L1.95,111.2z" />
    </svg>
  </div>
  )
};