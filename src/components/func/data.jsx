
export function getFormattedDateTime() {
  const now = new Date();
  

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  

  const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayName = weekDays[now.getDay()];
  

  const dayOfMonth = now.getDate();
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  const monthName = monthNames[now.getMonth()];
  const year = now.getFullYear();
  
  return `${formattedTime} ${dayName} ${dayOfMonth} ${monthName} ${year}`;
}