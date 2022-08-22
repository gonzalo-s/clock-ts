import { Dispatch } from 'react'
import { ActionType } from '../types/actionTypes'
import { Action, NewTime } from '../types/actionTypes'

export const updateTime = (newTime: NewTime) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATETIME,
            payload: newTime,
        })
    }
}
