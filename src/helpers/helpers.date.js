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
  let date_p = new Date(date.getTime());
  date_p.setDate(1);
  return date_p; 
}

export function getMonthEnd(date) {
  let date_p = new Date(date.getTime());
  const month = date_p.getMonth();
  if (month === 1) {
    date_p = addDays(date_p.setMonth(2, 1), -1);  
  } else if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
    date_p.setDate(31);  
  } else {
    date_p.setDate(30);  
  }
  return date_p; 
}

export function getYearStart(date) {
  let date_p = new Date(date.getTime());
  date_p.setMonth(0, 1);
  return date_p; 
}

export function getYearEnd(date) {
  let date_p = new Date(date.getTime());
  date_p.setMonth(11, 31);
  return date_p; 
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