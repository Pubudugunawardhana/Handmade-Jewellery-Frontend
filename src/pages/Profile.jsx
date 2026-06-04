import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
    const { user, setUser, loading } = useContext(AuthContext);
    const [preferences, setPreferences] = useState({
        faceShape: '',
        skinTone: '',
        personality: ''
    });
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        } else if (user) {
            setName(user.name);
            setPreferences(user.preferences || { faceShape: '', skinTone: '', personality: '' });
        }
    }, [user, loading, navigate]);

    const handlePrefChange = (e) => {
        setPreferences({ ...preferences, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('auth-token');
            const res = await axios.put('http://localhost:5000/api/user/profile', {
                name,
                preferences
            }, {
                headers: { 'x-auth-token': token }
            });
            setUser(res.data);
            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error("Error updating profile");
        }
    };

    if (loading) return <div className="container mt-3 text-center">Loading...</div>;
    if (!user) return null;

    return (
        <div className="container" style={{ marginTop: '3rem' }}>
            <div className="glass-card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 className="mb-3 text-center"><FaUserEdit /> User Profile</h2>
                
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={user.email} disabled style={{ opacity: 0.7 }} />
                    </div>

                    <h4 className="mt-4 mb-3" style={{ color: 'var(--secondary)' }}>Jewellery Preferences</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Help us tailor our AI recommendations specifically for you.</p>
                    
                    <div className="form-group mt-3">
                        <label>Face Shape</label>
                        <select className="form-control" name="faceShape" value={preferences.faceShape} onChange={handlePrefChange}>
                            <option value="">Select...</option>
                            <option value="Round">Round</option>
                            <option value="Oval">Oval</option>
                            <option value="Square">Square</option>
                            <option value="Heart">Heart</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Skin Tone</label>
                        <select className="form-control" name="skinTone" value={preferences.skinTone} onChange={handlePrefChange}>
                            <option value="">Select...</option>
                            <option value="Warm">Warm</option>
                            <option value="Cool">Cool</option>
                            <option value="Neutral">Neutral</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Personality Vibe</label>
                        <select className="form-control" name="personality" value={preferences.personality} onChange={handlePrefChange}>
                            <option value="">Select...</option>
                            <option value="Calm & Ocean">Calm & Ocean</option>
                            <option value="Bold & Vibrant">Bold & Vibrant</option>
                            <option value="Minimalist">Minimalist</option>
                            <option value="Elegant">Elegant</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4" style={{ width: '100%' }}>Save Preferences</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
