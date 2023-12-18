import { convertDistance } from "../helpers/convertDistance"
import { convertDuration } from "../helpers/convertDuration"

export const travelDataAdapter = (duration, distance) => {

    return {
        duration : convertDuration(duration),
        distance : convertDistance(distance),
    }
}