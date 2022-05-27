import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderSlider = () => {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        axios.get("/sliderData.json").then((data) => {
            setSliderData(data.data);
            console.log(data.data);
        });
    }, []);
    return (
        <div className="w-full  overflow-hidden">
            <div className="w-[500%] h-full flex ">
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
        </div>
    );
};

export default HeaderSlider;
