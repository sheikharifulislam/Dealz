import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const HeaderSlider = () => {
    const [sliderData, setSliderData] = useState([]);
    const [count, setCount] = useState(0);
    const timeOutRef = useRef(null);

    const resetTimeOut = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    };

    const incrementCount = () => {
        if (count < sliderData.length - 1 || 0) {
            setCount((previousState) => previousState + 1);
        } else {
            setCount(0);
        }
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount((previousState) => previousState - 1);
        } else {
            setCount(sliderData.length - 1 || 0);
        }
    };

    useEffect(() => {
        axios.get("/sliderData.json").then((data) => {
            setSliderData(data.data);
        });
    }, []);

    useEffect(() => {
        resetTimeOut();
        timeOutRef.current = setTimeout(() => {
            if (count < sliderData.length - 1 || 0) {
                setCount((previousState) => previousState + 1);
            } else {
                setCount(0);
            }
        }, 3000);
        return () => {
            resetTimeOut();
        };
    }, [count, sliderData]);

    return (
        <div className="w-full  overflow-hidden">
            <div
                className="w-[500%] h-full flex relative top-0 duration-300"
                style={{ right: count * 100 + "%" }}
            >
                {sliderData.map((data) => (
                    <NavLink
                        to="/"
                        key={data.id}
                        className="block w-full h-full"
                    >
                        <img
                            src={data.imgUlr}
                            className="w-full h-full"
                            alt=""
                        />
                    </NavLink>
                ))}
            </div>
            <div>
                <button
                    className="slider-arrow left-5"
                    onClick={decrementCount}
                >
                    <AiOutlineLeft size={20} />
                </button>
                <button
                    className="slider-arrow right-5"
                    onClick={incrementCount}
                >
                    <AiOutlineRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default HeaderSlider;
