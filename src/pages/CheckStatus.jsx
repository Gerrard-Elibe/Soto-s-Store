import { useState } from 'react';
import Navbar from '../components/Navbar';
import './CheckStatus.css';

function CheckStatus() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleCheckStatus = () => {
    // Here, you would check the status from the local storage or API
    const applicants = JSON.parse(localStorage.getItem('applicants')) || [];
    const applicant = applicants.find(app => app.email === email);
    if (applicant) {
      setStatus(applicant.status);
    } else {
      setStatus('No application found');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="check-status">
        <h2>Check Your Application Status</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleCheckStatus}>Check Status</button>
        {status && <p>Status: {status}</p>}
      </div>
    </div>
  );
}

export default CheckStatus;
