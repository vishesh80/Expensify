import React from 'react';
import { Route , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

const route = props => (
                        <Route {...props} 
                                component={(props.auth)? props.component : redirect} />
                        );


const mapStateToProps = state => ({

    auth : !!state.auth.uid
});

const redirect = () => (<Redirect to="/" />);

export default connect(mapStateToProps)(route);