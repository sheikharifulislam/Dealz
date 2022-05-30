import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import useSlider from '../../../../hooks/useSlider'

const HeaderSlider = () => {
    const [sliderData, setSliderData] = useState([])
    const { count, incrementCount, decrementCount } = useSlider(sliderData)

    useEffect(() => {
        axios.get('/sliderData.json').then((response) => {
            setSliderData(response.data)
        })
    }, [])

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="relative top-0 flex h-full w-[500%] duration-1000"
                style={{ right: count * 100 + '%' }}
            >
                {sliderData.map((data) => (
                    <NavLink
                        to="/"
                        key={data.id}
                        className="block h-full w-full"
                    >
                        <img
                            src={data.imgUlr}
                            className="h-full w-full object-cover"
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
    )
}

export default HeaderSlider
