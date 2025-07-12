import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Maintenance from "./Maintenance";
import AccessibilityPage from "./AccessibilityPage";
import TermsAndConditions from "./TermsAndConditions";
import NotFound from "./NotFound";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MultiStepForm from "./MultiStepForm";
import PrivacyPolicy from "./PrivacyPolicy";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CarsPage from "./components/CarsPage";
import CarDetails from "./components/CarDetails";
import BookingPage from "./components/BookingPage";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import AdminLogin from "./components/AdminLogin";
import AddCar from "./components/AddCar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/form" element={<MultiStepForm />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route element={<PrivateRoute />}> 
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/add-car" element={<AddCar />} />
              <Route path="/cars/:id" element={<CarDetails />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
