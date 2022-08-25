export const getCurrentTimeString = () => {
    const now = new Date();
    const time = { hours: now.getHours(), minutes: now.getMinutes() };
    const meridian = time.hours >= 12 ? 'PM' : 'AM';
    const formatted = { hours: time.hours.toString(), minutes: time.minutes.toString() };
    if (formatted.minutes.length === 1) formatted.minutes = `0${formatted.minutes}`;
    if (time.hours > 12) formatted.hours = (time.hours - 12).toString();
    if (time.hours === 0) formatted.hours = '12';
    return `${formatted.hours}:${formatted.minutes} ${meridian}`;
};