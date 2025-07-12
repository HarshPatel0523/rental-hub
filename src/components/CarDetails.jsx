import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  const carData = {
    1: {
      name: 'Maruti Suzuki Swift',
      category: 'Hatchback',
      price: 1200,
      transmission: 'Manual',
      fuelType: 'Petrol',
      seats: 5,
      features: [
        'Bluetooth Audio',
        'Air Conditioning',
        'Power Windows',
        'ABS',
        'Remote Locking',
      ],
      images: ['/images/swift.jpeg'],
      description: 'The Maruti Suzuki Swift is a popular hatchback in India, known for its fuel efficiency, compact size, and reliable performance. Perfect for city drives and short trips.'
    },
    2: {
      name: 'Hyundai Creta',
      category: 'SUV',
      price: 2200,
      transmission: 'Automatic',
      fuelType: 'Diesel',
      seats: 5,
      features: [
        'Touchscreen Infotainment',
        'Rear Parking Camera',
        'Cruise Control',
        'Automatic Climate Control',
        'Alloy Wheels',
      ],
      images: ['/images/creta.jpeg'],
      description: 'The Hyundai Creta is a stylish and spacious SUV, ideal for families and long journeys. Enjoy comfort, safety, and advanced features on every ride.'
    },
    3: {
      name: 'Tata Nexon EV',
      category: 'Electric',
      price: 2500,
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      features: [
        'Fast Charging',
        'Touchscreen Display',
        'Automatic Headlamps',
        'ABS with EBD',
        'Connected Car Tech',
      ],
      images: ['/images/nexon.jpeg'],
      description: 'The Tata Nexon EV is India’s leading electric SUV, offering eco-friendly driving, modern tech, and a smooth automatic transmission. Great for city and highway travel.'
    }
  };
  const car = carData[id] || carData[1];
  const [selectedDates, setSelectedDates] = useState({ pickupDate: '', returnDate: '' });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDates(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    if (!selectedDates.pickupDate || !selectedDates.returnDate) return 0;
    const start = new Date(selectedDates.pickupDate);
    const end = new Date(selectedDates.returnDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? days * car.price : 0;
  };

  return (
    <div className="pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={car.images[0]} alt={car.name} className="w-full h-[400px] object-cover rounded-lg mb-4" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <p className="text-gray-600 mb-2">{car.category}</p>
            <p className="text-blue-600 text-2xl font-bold mb-4">₹{car.price}/day</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="text-gray-600 block text-sm">Transmission</span>
                <span className="font-medium">{car.transmission}</span>
              </div>
              <div>
                <span className="text-gray-600 block text-sm">Fuel Type</span>
                <span className="font-medium">{car.fuelType}</span>
              </div>
              <div>
                <span className="text-gray-600 block text-sm">Seats</span>
                <span className="font-medium">{car.seats}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="grid grid-cols-2 gap-4">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-blue-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">Book Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-600 mb-2">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={selectedDates.pickupDate}
                  onChange={handleDateChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={selectedDates.returnDate}
                  onChange={handleDateChange}
                  min={selectedDates.pickupDate || new Date().toISOString().split('T')[0]}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span>Daily Rate:</span>
                <span>₹{car.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Days:</span>
                <span>{selectedDates.pickupDate && selectedDates.returnDate ? Math.ceil((new Date(selectedDates.returnDate) - new Date(selectedDates.pickupDate)) / (1000 * 60 * 60 * 24)) : 0}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-3">
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Proceed to Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
