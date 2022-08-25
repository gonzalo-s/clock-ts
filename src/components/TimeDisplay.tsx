import React from 'react'

type Props = {
    time: string
}

const TimeDisplay = ({ time }: Props) => {
    return <div>{time}</div>
}

export default TimeDisplay
