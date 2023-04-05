import React from 'react'
import { useSelector } from 'react-redux'
import TimerView from './TimerView'
// import './ListTimers.css'

export default function ListTimers() {
    const timers = useSelector(state => state.timers.value)

    return (
		<div className="bg-pink-300">
			{timers.map((timer, i) => <TimerView key={`timer-${i}`} index={i} {...timer} />)}
		</div>
	)
}