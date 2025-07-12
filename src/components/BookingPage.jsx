import { useState } from 'react';

const BookingPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    car: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! Our team will contact you at your Indian mobile number.');
  };

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Book Your Car</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="phone" type="tel" placeholder="Mobile Number (e.g. +91 98765 43210)" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="pickupDate" type="date" placeholder="Pickup Date" value={form.pickupDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="returnDate" type="date" placeholder="Return Date" value={form.returnDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="car" type="text" placeholder="Car Model" value={form.car} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
