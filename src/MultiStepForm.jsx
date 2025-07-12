import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);
  const submit = () => alert("Registered successfully!");

  const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  const buttonClass = "px-6 py-2 rounded-md font-medium transition-colors";
  const primaryButton = `${buttonClass} bg-blue-600 text-white hover:bg-blue-700`;
  const secondaryButton = `${buttonClass} bg-gray-200 text-gray-700 hover:bg-gray-300`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Registration</h1>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Personal Info</span>
            <span>Contact</span>
            <span>Password</span>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex justify-end">
              <button onClick={next} className={primaryButton}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex justify-between">
              <button onClick={prev} className={secondaryButton}>
                Back
              </button>
              <button onClick={next} className={primaryButton}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex justify-between">
              <button onClick={prev} className={secondaryButton}>
                Back
              </button>
              <button onClick={submit} className={primaryButton}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
