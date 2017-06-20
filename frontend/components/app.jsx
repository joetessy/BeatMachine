import React from 'react';
import HomePageContainer from './homepage/homepage_container';
import SessionFormContainer from './homepage/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from './../util/route_util';



const App = () => (
  <div>
    <Route path="/" component={HomePageContainer}/>
  </div>
);

export default App;
