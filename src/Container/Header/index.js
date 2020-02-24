import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <Link to="/" className="navbar-brand" >Logo</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Images without Data</Link>
          </li>
          <li className="nav-item">
            <Link to="/images-with-data" className="nav-link">Images with Data</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
export default Header;