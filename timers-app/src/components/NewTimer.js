import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import './NewTimer.css';

// We need to import our action to add a new timer
import { addTimer } from '../features/timers/timersSlice'

export default function NewTimer() {
	const [ name, setName ] = useState('')
	const dispatch = useDispatch()

	return (
		<div className="min-w-full flex">
			<input
				className="py-2 px-3 w-full rounded-tl-md rounded-bl-md"
				type='text'
				placeholder="New Timer Name"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)} />
			
			<button className="bg-gray-400 px-4 rounded-tr-md rounded-br-md bg-purple-500 hover:bg-purple-700 text-white font-bold py-2"
				onClick={() => dispatch(addTimer(name))}
			>Save</button>
		</div>
	)
}