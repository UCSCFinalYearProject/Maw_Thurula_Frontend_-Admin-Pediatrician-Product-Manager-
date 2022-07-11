import {UPDATE_TEMP_COUNT} from "../constants/constants";


export interface updateTempPostItem {
    type: typeof UPDATE_TEMP_COUNT
    payload: number
}

