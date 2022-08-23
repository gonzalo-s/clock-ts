import { Dispatch } from 'react'
import { ActionClock, ClockTypes } from '../types/clockTypes'
import { NewTime } from '../types/clockTypes'

export const updateTime = (newTime: NewTime) => {
    return (dispatch: Dispatch<ActionClock>) => {
        dispatch({
            type: ClockTypes.UPDATE_TIME,
            payload: newTime,
        })
    }
}
