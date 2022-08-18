import React from 'react'

type Props = {
    time: String
}

const TimeDisplay = ({ time }: Props) => {
    return <div>{time}</div>
}

export default TimeDisplay
