import React from 'react'
import 'swiper/css'
import { SwiperSlide } from 'swiper/react'
import StarRating from '../../../../../lib/star rating/StarRating'

const SingleTestimonial = ({ testimonial }) => {
    const { user, reviewText } = testimonial

    return (
        <SwiperSlide>
            <li class="swiper-slide">
                <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                    <div>
                        <StarRating />

                        <div class="mt-4">
                            <p class="text-2xl font-bold text-pink-600 sm:text-3xl">
                                {user.userName}
                            </p>

                            <p class="mt-4 leading-relaxed text-gray-500">
                                {reviewText}
                            </p>
                        </div>
                    </div>
                </blockquote>
            </li>
        </SwiperSlide>
    )
}

export default SingleTestimonial
