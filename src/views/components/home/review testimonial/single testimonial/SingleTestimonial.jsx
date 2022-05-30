import React from 'react'
import StarRating from '../../../../../lib/star rating/StarRating'

const SingleTestimonial = ({ testimonial }) => {
    const { user, reviewText } = testimonial

    return (
        <div class="flex h-full w-[100%] flex-col  justify-between bg-white p-12 md:w-[70%]">
            <div>
                <div class="mt-4">
                    <div class="flex">
                        <img
                            src={user.userImage.imgUrl}
                            className="h-[100px] w-[100px] rounded-xl object-cover"
                            alt=""
                        />
                        <div className="ml-3 mt-2">
                            <p class="font-openSans text-2xl font-bold text-pink-600 sm:text-3xl">
                                {user.userName}
                            </p>
                            <StarRating size={30} readonly />
                        </div>
                    </div>
                    <p class="mt-4 leading-relaxed text-gray-500">
                        {reviewText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial
