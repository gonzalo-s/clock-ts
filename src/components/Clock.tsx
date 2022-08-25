import React, { useEffect } from 'react'
import TimeDisplay from './TimeDisplay'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../state/reducers'
import '../styles/clock.css'
export interface IClockProps {}

const Clock = (props: IClockProps) => {
    const dispatch = useDispatch()
    const { nowHh, nowMm, nowSs } = useSelector((store: State) => store.clock)

    const { updateTime } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        const getTime = setInterval(() => {
            const date = new Date()
            const tzoffset = date.getTimezoneOffset() * 60000 //offset in milliseconds
            const localISOTime = new Date(Date.now() - tzoffset).toISOString()
            updateTime(localISOTime)
        }, 1000)

        return () => {
            clearInterval(getTime)
        }
    }, [updateTime])

    return (
        <div className="clock">
            <TimeDisplay time={nowHh} />
            :
            <TimeDisplay time={nowMm} />
            :
            <TimeDisplay time={nowSs} />
        </div>
    )
}

export default Clock
