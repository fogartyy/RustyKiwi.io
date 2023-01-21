//landing page
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Landing() {
    const { currentUser } = useAuth();
    const history = useHistory();
    
    return (
        <div>
        <h1>landing page</h1>
        <Link to="/login">
            <Button>Log in</Button>
        </Link>
        <Link to="/signup">
            <Button>Sign up</Button>
        </Link>
        </div>
    );
    }