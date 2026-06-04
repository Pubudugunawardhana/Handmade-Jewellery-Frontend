import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('auth-token', res.data.token);
            
            setUser(res.data.user);
            toast.success("Logged in successfully!");
            navigate('/profile');
        } catch (err) {
            const errorMsg = err.response?.data?.errors 
                ? err.response.data.errors.map(e => e.msg).join(', ') 
                : (err.response?.data?.message || 'Error logging in');
            toast.error(errorMsg);
        }
    };

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-3">Welcome Back</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label><FaEnvelope /> Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><FaLock /> Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
                </form>
                <p className="text-center mt-3">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
