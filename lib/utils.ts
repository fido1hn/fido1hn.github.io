export function formatTime(timestring: string) {
  const hours = parseInt(timestring.split(':')[0]);
  const minutes = timestring.split(':')[1];
  const period = hours < 12 ? 'am' : 'pm';
  const formattedHours = (hours % 12 || 12).toString();
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  return formattedTime;
}
