import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const transmissions = ['Manual', 'Automatic'];
const fuels = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
const featureOptions = [
  'Bluetooth Audio',
  'Air Conditioning',
  'Power Windows',
  'ABS',
  'Cruise Control',
  'Rear Parking Camera',
  'Touchscreen Infotainment',
  'Alloy Wheels',
];

const AddCar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    model: '',
    brand: '',
    pricePerDay: '',
    transmission: '',
    fuelType: '',
    seats: '',
    description: '',
    features: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFeatureToggle = (feat) => {
    setForm((prev) => {
      const exists = prev.features.includes(feat);
      return {
        ...prev,
        features: exists ? prev.features.filter((f) => f !== feat) : [...prev.features, feat],
      };
    });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageData = '';
      if (form.image) {
        imageData = await toBase64(form.image);
      }
      const payload = {
        model: form.model,
        brand: form.brand,
        pricePerDay: Number(form.pricePerDay),
        transmission: form.transmission,
        fuelType: form.fuelType,
        seats: Number(form.seats),
        description: form.description,
        features: form.features,
        image: imageData,
      };
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5002/api/v1/cars', payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Car added successfully');
      navigate('/cars');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to add car');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Car</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFile} className="w-full" required />
          <div className="grid md:grid-cols-2 gap-6">
            <input name="model" type="text" placeholder="Car Model" value={form.model} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <input name="brand" type="text" placeholder="Company Name" value={form.brand} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <input name="pricePerDay" type="number" placeholder="Price per day" value={form.pricePerDay} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
            <select name="transmission" value={form.transmission} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required>
              <option value="" disabled>Transmission</option>
              {transmissions.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select name="fuelType" value={form.fuelType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required>
              <option value="" disabled>Fuel Type</option>
              {fuels.map((f) => <option key={f}>{f}</option>)}
            </select>
            <input name="seats" type="number" placeholder="Seats" value={form.seats} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          </div>
          <textarea name="description" rows="4" placeholder="Description" value={form.description} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
          <div>
            <p className="mb-2 font-medium">Features</p>
            <div className="grid md:grid-cols-3 gap-2">
              {featureOptions.map((feat) => (
                <label className="flex items-center space-x-2" key={feat}>
                  <input type="checkbox" checked={form.features.includes(feat)} onChange={() => handleFeatureToggle(feat)} />
                  <span>{feat}</span>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            {loading ? 'Adding...' : 'Add Car'}
          </button>
          <div className="mt-4 text-left">
            <a href="/cars" className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">&lt;&lt; Back</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
