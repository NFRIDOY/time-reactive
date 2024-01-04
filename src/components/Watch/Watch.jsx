import React, { useState, useEffect } from 'react';

const Watch = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update time every second (1000ms)

        // Clean-up function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h2>Live Watch</h2>
            {/* <p>Current time: {time.toLocaleTimeString()}</p> */}
            <div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    {/* <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.getYear() }}></span>
                        </span>
                        Year
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.m }}></span>
                        </span>
                        Month
                    </div> */}
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.getDay() }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.getHours() }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.getMinutes() }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": time.getSeconds() }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;
