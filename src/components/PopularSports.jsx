import React from 'react'
import {
    FaFutbol,
    FaTableTennis,
    FaBaseballBall,
    FaBasketballBall
} from 'react-icons/fa'
import { GiTennisRacket, GiPoolTableCorner } from 'react-icons/gi'

const sports = [
    { name: 'Football', icon: <FaFutbol />, color: 'text-green-500' },
    { name: 'Badminton', icon: <GiTennisRacket />, color: 'text-pink-500' },
    { name: 'Tennis', icon: <FaTableTennis />, color: 'text-yellow-500' },
    { name: 'Swimming', icon: <GiPoolTableCorner />, color: 'text-sky-500' },
    { name: 'Basketball', icon: <FaBasketballBall />, color: 'text-orange-500' },
    { name: 'Cricket', icon: <FaBaseballBall />, color: 'text-blue-500' },
]

const PopularSports = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                        Popular Sports
                    </h2>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">
                        Find facilities for every sport you love
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                    {sports.map((sport, idx) => (
                        <div
                            key={idx}
                            className="group cursor-pointer bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Icon Wrapper */}
                            <div className={`text-4xl mb-3 flex justify-center ${sport.color} group-hover:scale-125 transition-transform duration-300`}>
                                {sport.icon}
                            </div>

                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {sport.name}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default PopularSports