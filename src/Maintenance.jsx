export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-32 h-32">
            <circle cx="60" cy="60" r="55" stroke="#3498db" strokeWidth="6" fill="#f6f8fa" />
            <rect x="40" y="70" width="40" height="10" rx="5" fill="#e74c3c" />
            <rect x="55" y="40" width="10" height="30" rx="5" fill="#2c3e50" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">We'll Be Back Soon!</h1>
        <p className="text-xl text-gray-600">
          Sorry for the inconvenience. We're performing some maintenance to improve your experience.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
