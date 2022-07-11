import {updateTempPostItem} from "../interfaces/inteface";
import {UPDATE_TEMP_COUNT} from "../constants/constants"

const initialState: StoreType = {
    tempCount: 0
}

interface  StoreType {
    tempCount: number
}

export const TempCount = (state:StoreType = initialState, action: updateTempPostItem) => {
    switch (action.type) {
        case UPDATE_TEMP_COUNT:{
            return{
                ...state,
                tempCount: action.payload
            }
        }
        default:{
            return state;
        }

    }
}