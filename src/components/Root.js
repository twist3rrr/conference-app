import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';

export default function Root() {
	return (
		<>
			<Route path="/admin" component={AdminPage} />
			<Route path="/auth" component={AuthPage} />
		</>
	)
}

