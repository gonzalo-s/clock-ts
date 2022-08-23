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
    const { hh, mm, ss } = useSelector((store: State) => store.clock)

    const { updateTime } = bindActionCreators(actionCreators, dispatch)

    const numToStrFormatter = (number: Number): String => {
        return number <= 9 ? '0' + number : number.toString()
    }

    useEffect(() => {
        const getTime = setInterval(() => {
            const newTime: Date = new Date()
            const date = newTime.toString()
            const hh = numToStrFormatter(newTime.getHours())
            const mm = numToStrFormatter(newTime.getMinutes())
            const ss = numToStrFormatter(newTime.getSeconds())
            const newState = { hh, mm, ss, date }
            updateTime(newState)
        }, 1000)

        return () => {
            clearInterval(getTime)
        }
    }, [updateTime])

    return (
        <div className="clock">
            <TimeDisplay time={hh} />
            :
            <TimeDisplay time={mm} />
            :
            <TimeDisplay time={ss} />
        </div>
    )
}

export default Clock
