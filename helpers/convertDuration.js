
export const convertDuration = (duration) => {
    const time = duration / 3600;
    const timeInHours = Math.round(time * 100 / 100);

    if (timeInHours > 1) {
        return `${timeInHours}Hr`;
    } else {
        const timeInMinutes = Math.round(time * 60 * 100 / 100);
        return `${timeInMinutes}min`;
    }
}