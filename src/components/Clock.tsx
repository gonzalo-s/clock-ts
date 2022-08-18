import React, { useState, useEffect } from 'react'
import '../styles/clock.css'
import TimeDisplay from './TimeDisplay'

export interface IClockProps {}

const Clock = (props: IClockProps) => {
    // const { time, updateTime } = props
    const [time, setTime] = useState<Date | null>(null)

    const updateTime = (newTime: Date) => {
        setTime(newTime)
    }

    const numToStrFormatter = (number: Number): String => {
        return number <= 9 ? '0' + number : number.toString()
    }
    useEffect(() => {
        const getTime = setInterval(() => {
            const date: Date = new Date()
            updateTime(date)
        }, 1000)

        return () => {
            clearInterval(getTime)
        }
    }, [])

    const hh: String = time ? numToStrFormatter(time?.getHours()) : '00'
    const mm: String = time ? numToStrFormatter(time?.getMinutes()) : '00'
    const ss: String = time ? numToStrFormatter(time?.getSeconds()) : '00'

    useEffect(() => {
        console.log('paso un minuto')
        // todo Check if first item in calendar is near
    }, [mm])

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
