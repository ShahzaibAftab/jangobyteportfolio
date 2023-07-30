import React from 'react'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="logo" style={{ marginLeft: '30px' }}>
                    <img src="./logo.jpg" alt="logo" style={{ objectFit: 'contain' }} className="logo" />
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex justify-content-end w-100" style={{ marginRight: '30px', fontWeight: '1000', fontSize: '20px' }}>
                        <li className="nav-item" style={{ marginRight: '50px' }}>
                            <a className="nav-link" style={{ color: '#f8f9f5' }} href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ marginRight: '50px', color: '#f8f9f5' }} href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ marginRight: '50px', color: '#f8f9f5' }} href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ marginRight: '50px', color: '#f8f9f5' }} href="#">Training Program</a>
                        </li>
                        <li className="nav-item">
                            <a href='/Apply-Now'><button type="button" style={{ fontWeight: 'bold', marginLeft: '50px' }} class="shadow btnn btn-info px-5 py-3">Apply Now</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header
