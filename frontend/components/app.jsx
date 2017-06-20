import React from 'react';
import HomePageContainer from './homepage/homepage_container';
import LoginHomePageContainer from './login_homepage/login_homepage_container';
import SessionFormContainer from './homepage/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from './../util/route_util';



const App = () => (
  <div>
    <Route path="/" component={HomePageContainer}/>
    <Route path="/stream" component={LoginHomePageContainer} />
  </div>
);

export default App;
