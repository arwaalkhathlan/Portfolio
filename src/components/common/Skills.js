import React from 'react';


const Skills = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Skills</h1>
      <div className="row">
        {/* React.js */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Front-End Development</h3>
              <h5 className="card-subtitle mb-2 text-muted">React.js</h5>
              <p className="card-text">Building dynamic, responsive, and efficient web applications with React.js.</p>
              <i className="bi bi-bootstrap" style={{ fontSize: '2rem' }}></i>
            </div>
          </div>
        </div>
        {/* Flutter */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Application Development</h3>
              <h5 className="card-subtitle mb-2 text-muted">Flutter</h5>
              <p className="card-text">Creating cross-platform mobile applications with a smooth and interactive user experience using Flutter.</p>
              <i className="bi bi-bootstrap" style={{ fontSize: '2rem' }}></i>
            </div>
          </div>
        </div>
        {/* Python */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Data Analysis & AI</h3>
              <h5 className="card-subtitle mb-2 text-muted">Python</h5>
              <p className="card-text">Utilizing Python for data analysis, machine learning, and AI to derive insights and create intelligent solutions.</p>
              <i className="bi bi-bootstrap" style={{ fontSize: '2rem' }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
