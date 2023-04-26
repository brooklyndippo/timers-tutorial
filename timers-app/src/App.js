import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';
import './index.css';

function App() {
  return (
    <div className="bg-gray-300 min-h-[1000px] p-5 flex flex-col gap-10">
      <p className="text-purple-800 font-bold text-3xl text-center">Time Tracker ⏲️</p>
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
