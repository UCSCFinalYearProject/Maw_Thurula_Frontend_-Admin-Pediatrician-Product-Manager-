import {updateTempPostItem} from "../interfaces/inteface";
import {UPDATE_TEMP_COUNT} from "../constants/constants";

export const updateTempPost = (tempCount: number): updateTempPostItem => {
    return {
        type: UPDATE_TEMP_COUNT,
        payload: tempCount
    }
}

export const makeZeroTempPost = (tempCount: number): updateTempPostItem => {
    return {
        type: UPDATE_TEMP_COUNT,
        payload: tempCount
    }
}
