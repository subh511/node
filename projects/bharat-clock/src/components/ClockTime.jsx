

function ClockTiming(){

  let time = new Date();

  return <p className="text-center lead">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default ClockTiming;