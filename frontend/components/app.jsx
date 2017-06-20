import React from 'react';
import HomePageContainer from './homepage/homepage_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from './../util/route_util';


const App = () => (
  <div>
    <HomePageContainer/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
