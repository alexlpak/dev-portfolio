import React, { useEffect, useState } from 'react';
import { getCurrentTimeString } from '../../utilities/time';

const TimeDisplay: React.FC = () => {
    const [time, setTime] = useState(getCurrentTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(() => getCurrentTimeString());
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>{time}</div>
    );
};

export default TimeDisplay;