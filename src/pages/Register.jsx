import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            };
            const res = await axios.post('http://localhost:5000/api/auth/register', payload);
            localStorage.setItem('auth-token', res.data.token);
            
            // Fetch User Details
            const userRes = await axios.get('http://localhost:5000/api/user/profile', {
                headers: { 'x-auth-token': res.data.token }
            });
            setUser(userRes.data);
            toast.success("Registration successful!");
            navigate('/profile');
        } catch (err) {
            const errorMsg = err.response?.data?.errors 
                ? err.response.data.errors.map(e => e.msg).join(', ') 
                : (err.response?.data?.message || 'Error registering');
            toast.error(errorMsg);
        }
    };

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-3">Create an Account</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label><FaUser /> Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><FaEnvelope /> Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label><FaLock /> Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleChange} required minLength="6" />
                    </div>
                    <div className="form-group">
                        <label><FaLock /> Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} required minLength="6" />
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
