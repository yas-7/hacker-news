export const getFormatedDate = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const isToday = new Date().toDateString() === date.toDateString();
  const day = isToday
    ? 'today at'
    : date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return `${day} ${time}`;
};
