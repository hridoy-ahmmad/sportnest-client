import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
    {
        name: 'Rahim Ahmed',
        role: 'Football Player',
        comment: 'SportNest makes booking so easy. I can find nearby grounds instantly and book without any hassle.',
    },
    {
        name: 'Sadia Khan',
        role: 'Tennis Player',
        comment: 'Great platform! Clean UI, fast booking system, and trusted facilities everywhere.',
    },
    {
        name: 'Mehedi Hasan',
        role: 'Cricket Player',
        comment: 'I love how simple it is to find and reserve cricket grounds. Highly recommended!',
    },
]

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                        What Athletes Say
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Real feedback from players using SportNest
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-blue-100"
                        >
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />

                            {/* Comment */}
                            <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                {item.comment}
                            </p>

                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            {/* User */}
                            <div>
                                <h4 className="font-bold text-gray-900">
                                    {item.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials