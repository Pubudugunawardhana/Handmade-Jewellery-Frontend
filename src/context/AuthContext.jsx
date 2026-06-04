import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem('auth-token');
            if (token === null) {
                localStorage.setItem('auth-token', '');
                token = '';
            }

            if (token) {
                try {
                    const res = await axios.get('http://localhost:5000/api/user/profile', {
                        headers: { 'x-auth-token': token }
                    });
                    setUser(res.data);
                } catch (err) {
                    console.error('Error fetching user', err);
                    setUser(null);
                }
            }
            setLoading(false);
        };
        
        checkLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
