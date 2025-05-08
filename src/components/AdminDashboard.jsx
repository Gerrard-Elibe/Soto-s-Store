import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const [applicants, setApplicants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const applicantsPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.email !== 'gerardelibe@gmail.com' || user.password !== 'Gerrard21$') {
      toast.error('❌ Unauthorized access. Please log in as Admin.');
      navigate('/admin-login');
    }

    const storedApplicants = JSON.parse(localStorage.getItem('applicants')) || [];
    setApplicants(storedApplicants);
  }, [navigate]);

  const handleApprove = (index) => {
    const updated = [...applicants];
    updated[index].status = 'accepted';
    localStorage.setItem('applicants', JSON.stringify(updated));
    setApplicants(updated);
    toast.success('✅ Applicant Approved!');
  };

  const handleDecline = (index) => {
    const updated = [...applicants];
    updated[index].status = 'declined';
    localStorage.setItem('applicants', JSON.stringify(updated));
    setApplicants(updated);
    toast.error('❌ Applicant Declined.');
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('✅ Logged out successfully.');
    navigate('/admin-login');
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           applicant.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || applicant.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const indexOfLastApplicant = currentPage * applicantsPerPage;
  const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
  const currentApplicants = filteredApplicants.slice(indexOfFirstApplicant, indexOfLastApplicant);
  const totalPages = Math.ceil(filteredApplicants.length / applicantsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={darkMode ? "admin-dashboard dark" : "admin-dashboard"}>
      <div className="admin-header">
        <h2>Admin - Applicants</h2>
        <div className="admin-actions">
          <button onClick={handleToggleDarkMode}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
          <button onClick={handleLogout} className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="declined">Declined</option>
        </select>
      </div>

      {currentApplicants.length === 0 ? (
        <p className="no-applicants">No applicants found.</p>
      ) : (
        currentApplicants.map((applicant, index) => (
          <div key={index} className="applicant-card">
            <h3>{applicant.fullName}</h3>
            <p><strong>Email:</strong> {applicant.email}</p>
            <p><strong>Phone:</strong> {applicant.phone}</p>
            <p><strong>Address:</strong> {applicant.address}</p>
            <p><strong>Bio:</strong> {applicant.bio}</p>
            <p><strong>Status:</strong> {applicant.status}</p>
            <div className="admin-buttons">
              <button className="accept-btn" onClick={() => handleApprove(index)}>Accept</button>
              <button className="decline-btn" onClick={() => handleDecline(index)}>Decline</button>
            </div>
          </div>
        ))
      )}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
