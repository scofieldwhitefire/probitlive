import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              {new Date().getFullYear()} © Bitbing<span className="font-light">live</span>.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer