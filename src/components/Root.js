import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import ProtectedRoute from './common/ProtectedRoute';

export default function Root() {
	return (
		<>
			<ProtectedRoute path="/admin" component={AdminPage} />
			<Route path="/auth" component={AuthPage} />
		</>
	)
}

