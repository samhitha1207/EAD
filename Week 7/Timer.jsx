import { useState, useEffect} from "react";
function Timer()
{
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() =>{
        let timer= null;

        if(isRunning)
        {
            timer = setInterval(() =>{
                setSeconds(seconds + 1);
            }, 1000);
        }else if(!isRunning && seconds !== 0){
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning,seconds]);
    return(
        <>
        <h1> Timer </h1>
        <h2> Seconds: {seconds}</h2>
        <button onClick={() => setIsRunning(true)}> Start </button><span>
        <button onClick={() => setIsRunning(false)}> Stop </button>  </span><span>
        <button onClick={() => setSeconds(0)}> Reset </button> </span>
        </>
    );
}
export default Timer;