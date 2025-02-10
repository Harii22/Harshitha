import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

// Button component
function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:from-orange-500 hover:to-yellow-400 transition ${className}`}
    >
      {children}
    </button>
  );
}

// HomePage component
function HomePage() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [availableSeats] = useState(50); // Example of available seats, can be dynamically set

  const handleCheckInChange = (e) => setCheckIn(e.target.value);
  const handleCheckOutChange = (e) => setCheckOut(e.target.value);

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 bg-white shadow-2xl rounded-lg border border-gray-200 mt-6 text-center">
      <h2 className="text-4xl font-bold text-gold">Restaurant Reservation System</h2>
      <p className="text-gray-700 text-lg">Welcome to Malla Reddy Restaurant. Experience luxury and comfort with our premium services.</p>
      
      <div className="mt-6">
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <div>
              <label htmlFor="checkIn" className="text-lg font-semibold">Check-In</label>
              <input
                type="date"
                id="checkIn"
                value={checkIn}
                onChange={handleCheckInChange}
                className="border p-3 rounded-lg w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="text-lg font-semibold">Check-Out</label>
              <input
                type="date"
                id="checkOut"
                value={checkOut}
                onChange={handleCheckOutChange}
                className="border p-3 rounded-lg w-full mt-2"
              />
            </div>
          </div>
          
          <p className="text-gray-600 mt-4">Available Seats: {availableSeats}</p>
        </div>
        
        <div className="mt-6">
          <Button onClick={() => navigate("/reservations")} className="w-full">
            Check availability and book your table
          </Button>
        </div>
      </div>
    </div>
  );
}

// MenuPage component
function MenuPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 bg-white shadow-xl rounded-lg border border-gray-200 mt-6">
      <h2 className="text-3xl font-semibold text-center text-gold">Menu</h2>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-gray-800">Starters</h3>
          <ul className="list-disc pl-5">
            <li>Vegetable Spring Rolls</li>
            <li>Chicken Tikka</li>
            <li>Paneer Tikka</li>
            <li>French Fries</li>
            <li>Garlic Bread</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800">Main Course</h3>
          <ul className="list-disc pl-5">
            <li>Butter Chicken</li>
            <li>Dal Makhani</li>
            <li>Paneer Butter Masala</li>
            <li>Chicken Biryani</li>
            <li>Vegetable Pulao</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800">Beverages</h3>
          <ul className="list-disc pl-5">
            <li>Fresh Lime Soda</li>
            <li>Cold Coffee</li>
            <li>Fruit Punch</li>
            <li>Masala Chai</li>
            <li>Soft Drinks</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// ReservationPage component
function ReservationPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", guests: "", date: "", time: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
    setForm({ name: "", phone: "", email: "", guests: "", date: "", time: "" });
  };

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6 bg-white shadow-xl rounded-lg border border-gray-200 mt-6">
      <h2 className="text-3xl font-semibold text-center text-gold">Reservation Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="border p-3 rounded-lg w-full" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="border p-3 rounded-lg w-full" />
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="border p-3 rounded-lg w-full" />
        <input type="number" name="guests" value={form.guests} onChange={handleChange} placeholder="Number of Guests" required className="border p-3 rounded-lg w-full" />
        <input type="date" name="date" value={form.date} onChange={handleChange} required className="border p-3 rounded-lg w-full" />
        <input type="time" name="time" value={form.time} onChange={handleChange} required className="border p-3 rounded-lg w-full" />
        <Button type="submit" className="w-full">Submit Reservation</Button>
      </form>
    </div>
  );
}

// Reservation System component
function ReservationSystem() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="flex justify-between items-center bg-gradient-to-r from-yellow-500 to-orange-600 p-4 shadow-lg">
        <h1 className="text-xl font-bold text-white">Malla Reddy Restaurant</h1>
        <div>
          <Button onClick={() => navigate("/")} className="mr-4">Home</Button>
          <Button onClick={() => navigate("/reservations")} className="mr-4">Reservation</Button>
          <Button onClick={() => navigate("/menu")} className="mr-4">Menu</Button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <ReservationSystem />
    </Router>
  );
}

export default App;
