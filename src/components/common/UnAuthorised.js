import React from 'react';
import { Link } from 'react-router-dom';

export default () => (<h2>You are unaothorised user, please <Link to="/auth/signin">Login</Link>!!!</h2>);
