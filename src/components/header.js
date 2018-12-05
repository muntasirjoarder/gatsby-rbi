import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const logoUrl = require('../dist/img/logo.png')

const Header = () => (
  <div className="top-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#"><img src={logoUrl} alt="logo"/></a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fas fa-bars"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Team
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
