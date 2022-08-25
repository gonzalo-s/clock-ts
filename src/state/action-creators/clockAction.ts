import { Dispatch } from 'react'
import { ActionClock, ClockTypes } from '../types/clockTypes'

export const updateTime = (newTime: string) => {
    return (dispatch: Dispatch<ActionClock>) => {
        dispatch({
            type: ClockTypes.UPDATE_TIME,
            payload: newTime,
        })
    }
}
