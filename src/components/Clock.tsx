import React, { useEffect } from 'react'
import '../styles/clock.css'
import TimeDisplay from './TimeDisplay'
import { useStoreContext } from '../StoreContext'
import { getCalendarData } from '../API/getCalendarData'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../state/reducers'
export interface IClockProps {}

const Clock = (props: IClockProps) => {
    const { isSignedIn, calendarData, selectedCalendarId } = useStoreContext()
    const dispatch = useDispatch()
    const { hh, mm, ss } = useSelector((store: State) => store.clock)

    const { updateTime } = bindActionCreators(actionCreators, dispatch)
    console.log(calendarData ? calendarData : 'no calendar')

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

    useEffect(() => {
        console.log('paso un minuto')
        // todo Check if first item in calendar is near
        if (isSignedIn) {
            getCalendarData(selectedCalendarId)
        }
    }, [selectedCalendarId, mm, isSignedIn])

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
