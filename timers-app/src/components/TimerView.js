export default function TimerView({timer}) {
    const { id, name, time } = timer

    return (
        <div id={id}>
            <h2>{name}</h2>
            <h1>{time}</h1>
            <button>Start</button>
        </div>
    )
}