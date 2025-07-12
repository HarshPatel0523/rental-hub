import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        pickupDate: '',
        returnDate: '',
    });

    const [featuredCars, setFeaturedCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axios.get('http://localhost:5002/api/v1/cars');
                setFeaturedCars(res.data.slice(0, 3));
            } catch (err) {
                setFeaturedCars([]);
            }
        };
        fetchCars();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to cars page with search params
        window.location.href = `/cars?location=${searchParams.location}&pickup=${searchParams.pickupDate}&return=${searchParams.returnDate}`;
    };

    return (
        <div className="pt-20">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center py-24 px-4">
                <div className="absolute inset-0 bg-black opacity-30 z-0 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Find Your Perfect Rental Car</h1>
                        <p className="text-xl mb-8 drop-shadow">Discover our wide range of vehicles for any occasion</p>
                        <form onSubmit={handleSearch} className="bg-white text-black rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchParams.location}
                                    onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                                />
                                <input
                                    type="date"
                                    placeholder="Pickup Date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchParams.pickupDate}
                                    onChange={(e) => setSearchParams({ ...searchParams, pickupDate: e.target.value })}
                                />
                                <input
                                    type="date"
                                    placeholder="Return Date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchParams.returnDate}
                                    onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
                            >
                                Search Cars
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCars.map((car) => (
                        <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                            <img src={car.image} alt={car.brand ? `${car.brand} ${car.model}` : car.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{car.brand ? `${car.brand} ${car.model}` : car.name}</h3>
                                <p className="text-gray-600 mb-4">{car.category}</p>
                                <p className="text-blue-600 text-xl font-bold mb-4">₹{car.pricePerDay || car.price}/day</p>
                                <Link to={`/booking?car=${car.name || car.model}`} className="w-full block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose RentalHub?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <span className="text-4xl mb-4 block">🚗</span>
                            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                            <p className="text-gray-600">Choose from our diverse fleet of vehicles</p>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl mb-4 block">💰</span>
                            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                            <p className="text-gray-600">Competitive rates and special offers</p>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl mb-4 block">🔒</span>
                            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                            <p className="text-gray-600">Fully insured and maintained vehicles</p>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl mb-4 block">📱</span>
                            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                            <p className="text-gray-600">Simple online reservation process</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
