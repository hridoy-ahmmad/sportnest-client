import React from 'react'
import { FaBolt, FaShieldAlt, FaSmile, FaMapMarkedAlt } from 'react-icons/fa'

const features = [
    {
        title: 'Fast Booking',
        desc: 'Book your favorite sports facility within seconds without any hassle.',
        icon: <FaBolt />,
        color: 'text-yellow-500'
    },
    {
        title: 'Trusted Venues',
        desc: 'All facilities are verified and trusted for safe and quality experience.',
        icon: <FaShieldAlt />,
        color: 'text-blue-500'
    },
    {
        title: 'Easy Experience',
        desc: 'Simple UI and smooth process made for everyone to use easily.',
        icon: <FaSmile />,
        color: 'text-green-500'
    },
    {
        title: 'Nearby Locations',
        desc: 'Find sports facilities near your location quickly and efficiently.',
        icon: <FaMapMarkedAlt />,
        color: 'text-pink-500'
    },
]

const WhyChoose = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                        Why Choose SportNest?
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Everything you need for a smooth sports booking experience
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="
                                group
                                bg-white
                                p-6
                                rounded-2xl
                                shadow-sm
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition-all duration-300
                                border border-blue-100
                            "
                        >
                            <div className={`text-3xl mb-4 ${item.color}`}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default WhyChoose