const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/images/b1.jpg",
      description: "With 15 years of experience in the car rental industry",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "/images/b2.jpg",
      description: "Expert in customer service and fleet management",
    },
    {
      name: "Michael Chen",
      role: "Fleet Director",
      image: "/images/b3.jpg",
      description: "Specialized in vehicle maintenance and acquisitions",
    },
  ];

  return (
    <div className="pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About RentalHub
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Leading the way in car rentals with our commitment to quality,
            convenience, and customer satisfaction.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, RentalHub has grown from a small local operation to
              a leading car rental service. We started with just 5 cars and a
              dream to revolutionize the car rental experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we maintain a fleet of over 100 vehicles, serving thousands
              of satisfied customers. Our commitment to quality service and
              customer satisfaction remains at the core of everything we do.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/about.jpg"
              alt="RentalHub story"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency and
                reliability
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our services with modern solutions
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
