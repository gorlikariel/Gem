const addZero = min => (min < 10 ? '0' + min : min);
const d = new Date();
export const HOUR_STAMP = addZero(d.getHours()) + ':' + addZero(d.getMinutes());
