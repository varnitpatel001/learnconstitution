import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar() {
  return (
    <div
      style={{
        
        display: 'flex',
        height: '60px', // Adjust the height as needed
        width: '95%', // Span the entire width of the viewport
        overflow: 'hidden', // Hide any overflow if needed
        position: 'fixed', // Fix the position relative to the viewport
        top: '0', // Align it to the top of the viewport
        right: '0', // Align it to the right of the viewport
        backgroundColor: '#fff', // Set background color to white
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: Add a shadow for better visibility
        zIndex: '1000', // Ensure it sits above other content
        alignItems: 'center', // Center content vertically
        padding: '0 20px', // Optional: Add horizontal padding
        justifyContent: 'flex-end', // Align content to the right
      }}
    >
      <nav className="navbar navbar-light bg-light" style={{ width: 'fit-content', margin: '0' }}>
        <div className="container-fluid" >
          <form className="d-flex ms-auto" style={{ width: '90%',marginleft:'30%'}}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ flexGrow: 1 }}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'put text here',
  about: 'About',
};
