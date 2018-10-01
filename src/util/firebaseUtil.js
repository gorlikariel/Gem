const addZero = min => (min < 10 ? '0' + min : min);
const d = new Date();
export const HOUR_STAMP = addZero(d.getHours()) + ':' + addZero(d.getMinutes());
export const hourStampToMinutes = hourStamp => +hourStamp.slice(3);
export const hourStampToHours = hourStamp => +hourStamp.slice(0, 2);
export const checkIfItsTimeForPill = pillTime => {
  const currentHour = hourStampToHours(HOUR_STAMP);
  const currentMinutes = hourStampToMinutes(HOUR_STAMP);
  const pillHour = hourStampToHours(pillTime);
  const pillMinutes = hourStampToMinutes(pillTime);
  const shouldTakePill =
    currentHour === pillHour && currentMinutes === pillMinutes;
  return shouldTakePill;
};
