import React, {Component} from 'react'
import { FaBars } from 'react-icons/fa';



const logoUrl = require('../dist/img/logo.png')

class TopMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasScrolled: false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset;

        if(scrollTop > 50) {
            this.setState({hasScrolled: true});
        }
        else
        {
            this.setState({hasScrolled: false});
        }
    }
  render(){
      return(
      <div className={this.state.hasScrolled ? 'top-menu fixed':'top-menu'}>
        <div className="container">
            <div class="row">
                    <div class="col-sm-8">
                    <nav className="navbar navbar-expand-lg">             
                        <a className="navbar-brand" href="#"><img src={logoUrl} alt="logo"/></a>
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
                    <div class="col-sm-4">
                                <div id="menuToggle">
                                    <input type="checkbox" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                    </div>
            </div>
            
        </div>
    </div>
      );
  }
}

export default TopMenu