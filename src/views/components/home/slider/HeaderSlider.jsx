import axios from "axios";
import { useEffect, useState } from "react";

const HeaderSlider = () => {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        axios.get("/sliderData.json").then((data) => {
            setSliderData(data.data);
            console.log(data.data);
        });
    }, []);
    return (
        <div>
            {sliderData.map((data) => (
                <div key={data.id}>
                    <img
                        src={data.imgUlr}
                        className="w-[100%] object-contain"
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
};

export default HeaderSlider;
