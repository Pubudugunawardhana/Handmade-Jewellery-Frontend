import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            localStorage.setItem('auth-token', res.data.token);
            
            // Fetch User Details
            const userRes = await axios.get('http://localhost:5000/api/user/profile', {
                headers: { 'x-auth-token': res.data.token }
            });
            setUser(userRes.data);
            navigate('/profile');
        } catch (err) {
            setError(err.response?.data?.message || 'Error registering');
        }
    };

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-3">Create an Account</h2>
                {error && <p style={{ color: 'var(--danger)', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleChange} required minLength="6" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
