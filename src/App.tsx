import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import TrackingPage from './pages/TrackingPage';
import ShipmentHistoryPage from './pages/ShipmentHistoryPage'
import AddShipmentPage from './pages/AddShipmentPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/track" element={<TrackingPage />} />
        <Route path="/track/:trackingId" element={<TrackingPage />} />
        <Route path="/history" element={<ShipmentHistoryPage />} />
        <Route path="/add-shipping" element={<AddShipmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;