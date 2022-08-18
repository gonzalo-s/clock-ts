import React, { useState, useEffect } from 'react'
import '../styles/clock.css'
import TimeDisplay from './TimeDisplay'

export interface IClockProps {}

const Clock = (props: IClockProps) => {
    useEffect(() => {
        const getTime = setInterval(() => {
            const date: Date = new Date()
            setTime(date)
        }, 1000)

        return () => {
            clearInterval(getTime)
        }
    }, [])

    const [time, setTime] = useState<Date>()

    const numToStrFormatter = (number: Number): String => {
        return number <= 9 ? '0' + number : number.toString()
    }

    const hh: String = time ? numToStrFormatter(time?.getHours()) : '00'
    const mm: String = time ? numToStrFormatter(time?.getMinutes()) : '00'
    const ss: String = time ? numToStrFormatter(time?.getSeconds()) : '00'

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
