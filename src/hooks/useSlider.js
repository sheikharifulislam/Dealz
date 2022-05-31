import { useEffect, useRef, useState } from 'react';

const useSlider = (slideArray) => {
    const [count, setCount] = useState(0);
    const timeOutRef = useRef(null);

    const resetTimeOut = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    };

    const incrementCount = () => {
        if (count < slideArray.length - 1 || 0) {
            setCount((previousState) => previousState + 1);
        } else {
            setCount(0);
        }
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount((previousState) => previousState - 1);
        } else {
            setCount(slideArray.length - 1 || 0);
        }
    };

    useEffect(() => {
        resetTimeOut();
        timeOutRef.current = setTimeout(() => {
            if (count < slideArray.length - 1 || 0) {
                setCount((previousState) => previousState + 1);
            } else {
                setCount(0);
            }
        }, 4000);
        return () => {
            resetTimeOut();
        };
    }, [count, slideArray]);
    return {
        count,
        incrementCount,
        decrementCount,
    };
};

export default useSlider;
