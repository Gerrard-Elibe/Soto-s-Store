import { Route, Routes } from 'react-router-dom';  // No need to import BrowserRouter
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Apply from './pages/Apply';
import CheckStatus from './pages/CheckStatus';
 import Contact from './pages/Contact'; 
 import AdminLogin from './pages/AdminLogin'; // Import the AdminLogin component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/check-status" element={<CheckStatus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Route for Admin Login */}
      </Routes>
    </>
  );
}

export default App;
