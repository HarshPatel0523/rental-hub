import { useRef, useEffect } from "react";

const AccessibilityPage = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              RentalHub is committed to ensuring digital accessibility for people with disabilities. 
              We are continuously improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <div className="space-y-4 text-gray-600">
              <p>Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>High contrast text and backgrounds</li>
                <li>Clear and consistent navigation</li>
                <li>Alternative text for images</li>
                <li>Keyboard accessible functionality</li>
                <li>ARIA landmarks and labels</li>
                <li>Resizable text without loss of functionality</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conformance Status</h2>
            <p className="text-gray-600 mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and 
              developers to improve accessibility for people with disabilities. It defines three levels 
              of conformance: Level A, Level AA, and Level AAA. RentalHub is partially conformant with 
              WCAG 2.1 level AA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accessibility Support</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We welcome your feedback on the accessibility of RentalHub. Please let us know if you 
                encounter accessibility barriers:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600">E-mail: accessibility@rentalhub.com</p>
                <p className="text-gray-600">Visitor Address: 123 Rental Street, New York, NY 10001</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Compatible Assistive Technologies</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
            <p className="text-gray-600 mb-4">
              Accessibility of RentalHub relies on the following technologies to work with the 
              particular combination of web browser and any assistive technologies or plugins installed 
              on your computer:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Assessment Approach</h2>
            <p className="text-gray-600 mb-4">
              RentalHub assessed the accessibility of our website by the following approaches:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Self-evaluation</li>
              <li>External accessibility evaluation</li>
              <li>User testing with assistive technologies</li>
            </ul>
            <p className="text-sm text-gray-500 mt-6">Last Updated: July 11, 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
