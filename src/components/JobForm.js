import React, { useState } from 'react';

const JobForm = () => {
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

  return (
    <div style={{ padding: '1rem' }} className="home-container">
      <h2>📝 Add Welding Job</h2>
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

      <h3 style={{ marginTop: '2rem' }}>📋 Job Data (JSON Format)</h3>
      <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px' }}>
        {JSON.stringify(jobs, null, 2)}
      </pre>
    </div>
  );
};

export default JobForm;
