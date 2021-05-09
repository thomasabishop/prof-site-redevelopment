import getAndFormatPastDate from './getAndFormatPastDate';

const dayToReadableString = (day) => {
  let d = new Date(day);
  return d.toDateString();
};

export default function generateLastThirtyDays() {
  const today = new Date();
  let totalDays = 29;
  let days = [];

  while (totalDays > 0) {
    days.push(dayToReadableString(getAndFormatPastDate(today, totalDays)));
    totalDays--;
  }
  days.push(dayToReadableString(getAndFormatPastDate(today, 0)));
  return days;
}
