import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const ReviewTestimonial = () => {
    // const [reviewTestimonials, setReviewTestimonials] = useState([])

    // useEffect(() => {
    //     axios.get('reviewData.json').then((response) => {
    //         setReviewTestimonials(response.data)
    //     })
    // }, [])
    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                    <div className="max-w-xl text-center sm:text-left">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Don't just take our word for it...
                            <br className="hidden sm:block lg:hidden" />
                            Read reviews from our customers
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptas veritatis illo placeat harum porro
                            optio fugit a culpa sunt id!
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                                <BsChevronLeft />
                            </button>

                            <button className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                                <BsChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div className="overflow-hidden">
                            <ul>
                                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                                    <button className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white">
                                        <BsChevronLeft />
                                    </button>

                                    <button className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white">
                                        <BsChevronRight />
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white">
                        <BsChevronLeft />
                    </button>

                    <button className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white">
                        <BsChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ReviewTestimonial
