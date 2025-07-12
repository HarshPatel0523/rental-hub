import { useState } from 'react';
import { Link } from 'react-router-dom';

const CarsPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    transmission: '',
    fuelType: '',
  });

  const cars = [
    {
      id: 1,
      name: 'Maruti Suzuki Swift',
      category: 'Hatchback',
      price: 1200,
      transmission: 'Manual',
      fuelType: 'Petrol',
      seats: 5,
      image: '/images/swift.jpeg',
    },
    {
      id: 2,
      name: 'Hyundai Creta',
      category: 'SUV',
      price: 2200,
      transmission: 'Automatic',
      fuelType: 'Diesel',
      seats: 5,
      image: '/images/creta.jpeg',
    },
    {
      id: 3,
      name: 'Tata Nexon EV',
      category: 'Electric',
      price: 2500,
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      image: '/images/nexon.jpeg',
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20 px-4 md:px-8 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        <aside className="bg-white p-6 rounded-lg shadow-md h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold mb-6">Filters</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-600 mb-2">Category</h3>
              <select 
                name="category" 
                value={filters.category} 
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="electric">Electric</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div>
              <h3 className="text-gray-600 mb-2">Price Range</h3>
              <select 
                name="priceRange" 
                value={filters.priceRange} 
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Prices</option>
                <option value="0-50">$0 - $50/day</option>
                <option value="51-100">$51 - $100/day</option>
                <option value="101+">$101+/day</option>
              </select>
            </div>
            <div>
              <h3 className="text-gray-600 mb-2">Transmission</h3>
              <select 
                name="transmission" 
                value={filters.transmission} 
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div>
              <h3 className="text-gray-600 mb-2">Fuel Type</h3>
              <select 
                name="fuelType" 
                value={filters.fuelType} 
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
        </aside>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>💺 {car.seats} Seats</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>⛽ {car.fuelType}</span>
                </div>
                <p className="text-blue-600 text-xl font-bold mb-4">₹{car.price}/day</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to={`/cars/${car.id}`}
                    className="text-center bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/booking?car=${car.name}`}
                    className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CarsPage;
