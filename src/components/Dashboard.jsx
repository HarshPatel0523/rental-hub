import React from 'react';

const Dashboard = () => {
  // Example bookings data
  const bookings = [
    { id: 1, car: 'Maruti Suzuki Swift', pickup: '2025-07-15', return: '2025-07-18', status: 'Confirmed', price: 1200 },
    { id: 2, car: 'Hyundai Creta', pickup: '2025-07-20', return: '2025-07-22', status: 'Pending', price: 2200 },
  ];

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Bookings</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 font-semibold">Car</th>
                <th className="py-2 px-4 font-semibold">Pickup</th>
                <th className="py-2 px-4 font-semibold">Return</th>
                <th className="py-2 px-4 font-semibold">Price/Day</th>
                <th className="py-2 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="py-2 px-4">{booking.car}</td>
                  <td className="py-2 px-4">{booking.pickup}</td>
                  <td className="py-2 px-4">{booking.return}</td>
                  <td className="py-2 px-4">₹{booking.price}</td>
                  <td className="py-2 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
