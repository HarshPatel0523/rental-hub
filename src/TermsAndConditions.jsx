export default function TermsAndConditions() {
  return (
    <div className="pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using RentalHub's services, you agree to be bound by these Terms and
              Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Rental Requirements</h2>
            <p className="text-gray-600 mb-4">To rent a vehicle, you must:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Be at least 21 years of age</li>
              <li>Possess a valid driver's license</li>
              <li>Have a valid credit card in your name</li>
              <li>Provide proof of insurance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Reservations and Cancellations</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Reservations must be made at least 24 hours in advance. A valid credit card is
                required to secure your booking.
              </p>
              <p>Cancellation policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free cancellation up to 48 hours before pickup</li>
                <li>50% charge for cancellations within 24-48 hours</li>
                <li>No refund for cancellations less than 24 hours before pickup</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Vehicle Usage</h2>
            <div className="space-y-4 text-gray-600">
              <p>The vehicle must only be:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Driven by the registered renter or authorized additional drivers</li>
                <li>Used on properly maintained roads</li>
                <li>Used within the agreed-upon geographical boundaries</li>
                <li>Returned with a full tank of fuel</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Insurance and Liability</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Basic insurance is included in all rentals. Additional coverage options are available
                for purchase.
              </p>
              <p>The renter is responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any damage caused by negligent use</li>
                <li>Parking violations and traffic fines</li>
                <li>Theft if vehicle keys are not properly secured</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>We accept:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Major credit cards (Visa, MasterCard, American Express)</li>
                <li>Debit cards (additional restrictions may apply)</li>
              </ul>
              <p>
                A security deposit will be held on your card during the rental period.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modifications to Terms</h2>
            <p className="text-gray-600 mb-4">
              RentalHub reserves the right to modify these terms at any time. Changes will be
              effective immediately upon posting on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">For questions about these Terms, contact us at:</p>
              <p className="text-gray-600">Email: legal@rentalhub.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">Last Updated: July 11, 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
