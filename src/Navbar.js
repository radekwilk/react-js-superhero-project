import React from 'react';
import Logo from './img/Wilks-black-low-res.png'



class HamburgerMenu extends React.Component {
    render() {
        return (
            <div className="HamburgerMenu">
              <div className="HamburgerMenu-line"></div>
              <div className="HamburgerMenu-line"></div>
              <div className="HamburgerMenu-line"></div>
            </div>
        ) 
    }
}

class Sidebar extends React.Component {

    showSideBar() {
        console.log('Close button clicked!')

    }

    render() {
        return (
            <div className="SidebarMenu">
              <div
                 className="Sidebar-close"
                 onClick={()=> this.showSideBar()}
                 >x</div>
              <ul className="Sidebar-list">
                <li className="Sidebar-item" key="sidebar-about">
                    <a href="app.js" className="Sidebar-link">About</a>
                </li>
                <li className="Sidebar-item" key="sidebar-projects">
                    <a href="#projects" className="Sidebar-link">Projects</a>
                </li>
                <li className="Sidebar-item" key="sidebar-contact">
                    <a href="#contact" className="Sidebar-link">Contact</a>
                </li>
              </ul>
            </div>
        ) 
    }
}




class Navbar extends React.Component {
    render() {
        return(
            <nav className="Navbar">
                <HamburgerMenu />
                <Sidebar />
                <div className="Navbar-container">
                    <div className="Navbar-logo">
                        <a href="app.js">
                          <img src={Logo} alt="logo"></img>
                        </a>
                    </div>
                    <div className="Navbar-list">
                        <ul className="Navbar-list">
                            <li className="Navbar-item" key="nav-about">
                                <a href="#about" className="Navbar-link">
                                    About
                                </a>
                            </li>
                            <li className="Navbar-item" key="nav-projects">
                                <a href="#projects" className="Navbar-link">
                                    Projects
                                </a>
                            </li>
                            <li className="Navbar-item" key="nav-contact">
                                <a href="#contact" className="Navbar-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;