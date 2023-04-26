import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTimer, reset } from "../features/timers/timersSlice"; 
import './TimerView.css'

export default function TimerView({index, name, time, isRunning}) {
	const dispatch = useDispatch()

    const formatTime = (time) => {
        let hours = Math.round(time / 1000 / 60 / 60)
        let minutes = Math.round(time / 1000 / 60 % 60)
        let seconds = Math.round(time / 1000 % 60)
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        return `${hours}:${minutes}:${seconds}`
    }
      
    return (
        <div className='w-full bg-white border-gray-500 p-4 rounded-md shadow flex'>
            <div className="flex-grow flex flex-col">
                <div className="flex flex-row gap-4">
                    <p className="font-semibold text-gray-500">{name}</p>
                    <button 
                    onClick={() => dispatch(reset(index))}
                    >↻</button>  
                </div>
                <p className="text-3xl font-mono">{formatTime(time)}</p>
            </div>
            <div className='flex flex-col'>
                <button 
                className="h-full p-2 rounded-md min-w-[100px] font-semibold"
                style = {{backgroundColor: isRunning ? "rgb(107 33 168)" : "rgb(216 180 254)", color: isRunning ? "white": "rgb(59 7 100)"}}
                onClick={() => dispatch(toggleTimer(index))}
                >
                    {isRunning? "Pause" : "Start"}
                </button>
            </div>
        </div>
    )
}