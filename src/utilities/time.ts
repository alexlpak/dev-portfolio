export const getCurrentTimeString = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const meridian = hours > 12 ? 'PM' : 'AM';
    return `${formattedHours}:${minutes} ${meridian}`;
};