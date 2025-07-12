import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarsPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    transmission: '',
    fuelType: '',
  });

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:5002/api/v1/cars');
        setCars(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCars();
  }, []);

  // Filters will be applied to fetched cars
  /*
   
  */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const role = localStorage.getItem('role') || 'user';

  const handleDelete = async (carId) => {
    if(window.confirm('Sure, You want to delete this car?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5002/api/v1/cars/${carId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCars(prev => prev.filter(car => car._id !== carId));
        alert('Car deleted successfully');
      } catch (err) {
        alert('Car not deleted!');
      }
    }
  };

  return (
    <div className="pt-20 px-4 md:px-8 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Filters को ऊपर horizontal row में */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row md:items-end gap-4 justify-center">
          <div>
            <label className="block text-gray-600 mb-1 font-semibold">Category</label>
            <select 
              name="category" 
              value={filters.category} 
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[220px]"
            >
              <option value="">All Categories</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1 font-semibold">Price Range</label>
            <select 
              name="priceRange" 
              value={filters.priceRange} 
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[220px]"
            >
              <option value="">All Prices</option>
              <option value="0-50">$0 - $50/day</option>
              <option value="51-100">$51 - $100/day</option>
              <option value="101+">$101+/day</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1 font-semibold">Transmission</label>
            <select 
              name="transmission" 
              value={filters.transmission} 
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[220px]"
            >
              <option value="">All Types</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1 font-semibold">Fuel Type</label>
            <select 
              name="fuelType" 
              value={filters.fuelType} 
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[220px]"
            >
              <option value="">All Types</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {role === 'admin' && (
            <div className="col-span-full mb-4 flex justify-end">
              <Link to="/add-car" className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">
                Add Car
              </Link>
            </div>
          )}
          {cars
            .filter((car) => {
              const { category, transmission, fuelType } = filters;
              const matchCategory = !category || car.category?.toLowerCase() === category.toLowerCase();
              const matchTransmission = !transmission || car.transmission?.toLowerCase() === transmission.toLowerCase();
              const matchFuel = !fuelType || car.fuelType?.toLowerCase() === fuelType.toLowerCase();
              // priceRange simple example omitted for brevity
              return matchCategory && matchTransmission && matchFuel;
            })
            .map((car) => (
            <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.brand} {car.model}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>💺 {car.seats} Seats</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>⛽ {car.fuelType}</span>
                </div>
                <p className="text-blue-600 text-xl font-bold mb-4">₹{car.pricePerDay}/day</p>
                {/* <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to={`/cars/${car._id}`}
                    className="btn btn-info w-100 text-white"
                  >
                    View Details
                  </Link>
                  {role === 'admin' ? (
                    <Link
                      to={`/cars/edit/${car._id}`}
                      className="btn btn-warning w-100 text-white"
                    >
                      Edit Details
                    </Link>
                  ) : (
                    <Link 
                      to={`/booking?car=${car.name}`}
                      className="btn btn-primary w-100"
                    >
                      Book Now
                    </Link>
                  )}
                </div>
                {role === 'admin' && (
                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => handleDelete(car._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
*/}
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to={`/cars/${car._id}`}
                    className="text-center bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </Link>
                  {role === 'admin' ? (
                    <>
                      <Link
                        to={`/cars/edit/${car._id}`}
                        className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors text-center"
                      >
                        Edit Details
                      </Link>
                      <button
                        className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors text-center"
                        style={{ width: '210%' }}
                        onClick={() => handleDelete(car._id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <Link 
                      to={`/booking?car=${car.name}`}
                      className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                    >
                      Book Now
                    </Link>
                  )}
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
