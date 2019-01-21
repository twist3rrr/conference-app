import React, { Component } from 'react';
import UnAuthorised from './UnAuthorised';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { moduleName } from '../../ducks/auth';


class ProtectedRoute extends Component {

    renderProtected = (routeProps) => {
        const { authorised, component: ProtectedComponent } = this.props;
        return !!authorised ? <ProtectedComponent {...routeProps} /> : <UnAuthorised />
    }

    render() {
        const { component, ...rest } = this.props;
        return <Route {...rest} render={this.renderProtected}/>
    }
}

export default connect((state) => ({
    authorised: state[moduleName].user
}))(ProtectedRoute);
