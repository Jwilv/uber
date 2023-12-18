
export const convertDistance = (distance) => {
    const distanceInKm = distance / 1000
    return `${Math.round(distanceInKm * 100 / 100)} km`
}