import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('auth-token');
        setUser(null);
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">Wave Mirissa</Link>
                <ul className="nav-links">
                    {user ? (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={onLogout} className="btn btn-secondary">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register" className="btn btn-primary">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
