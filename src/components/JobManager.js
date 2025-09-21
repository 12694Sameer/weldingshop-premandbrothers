import React, { useState } from 'react';

const JobManager = () => {
  const [jobData, setJobData] = useState({
    jobId: '',
    customerName: '',
    jobType: '',
    material: '',
    quantity: '',
    deadline: '',
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs([...jobs, jobData]);
    setJobData({
      jobId: '',
      customerName: '',
      jobType: '',
      material: '',
      quantity: '',
      deadline: '',
    });
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(jobs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jobs.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: '1rem' }} className="home-container">
      <h2>🛠️ Add Welding Job</h2>
      <form onSubmit={handleSubmit}>
        {['jobId', 'customerName', 'jobType', 'material', 'quantity', 'deadline'].map((field) => (
          <div key={field} style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>{field}</label>
            <input
              type="text"
              name={field}
              value={jobData[field]}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem' }}
              required
            />
          </div>
        ))}
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add Job</button>
      </form>

      <h3 style={{ marginTop: '2rem' }}>📋 Job Details Table</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>ID</th>
            <th>Customer</th>
            <th>Type</th>
            <th>Material</th>
            <th>Qty</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.jobId}</td>
              <td>{job.customerName}</td>
              <td>{job.jobType}</td>
              <td>{job.material}</td>
              <td>{job.quantity}</td>
              <td>{job.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={downloadJSON} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        📥 Download as jobs.json
      </button>
    </div>
  );
};

export default JobManager;
