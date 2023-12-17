import { convertDuration } from "../helpers/convertDuration"

export const travelDataAdapter = (duration, distance) => {
    return {
        duration,
        distance,
    }
}