export function addDays(date, dayShift) {
  const dayMilliseconds = 24*60*60*1000;
  let newDate = new Date(date);   
  newDate.setTime(newDate.getTime() + dayShift * dayMilliseconds);
  return newDate; 
}

export function getWeekStart(date) {
  const day = date.getDay() || 7;
  if (day === 1) {
    return date
  }
  return addDays(date, (day - 1) * -1); 
}

export function getWeekEnd(date) {
  const day = date.getDay() || 7;
  if (day === 7) {
    return date
  }
  return addDays(date, 7 - day); 
}

export function getMonthStart(date) {
  date.setDate(1);
  return date; 
}

export function getMonthEnd(date) {
  const month = date.getMonth();
  if (month === 1) {
    date = addDays(date.setMonth(2, 1), -1);  
  } else if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
    date.setDate(31);  
  } else {
    date.setDate(30);  
  }
  return date; 
}


export function getWeek(date) {
  const date_p = new Date(date.getTime());
  date_p.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date_p.setDate(date_p.getDate() + 3 - (date_p.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(date_p.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date_p.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}