import React from 'react';
import HomePageContainer from './homepage/homepage_container';
import LoginHomePageContainer from './login_homepage/login_homepage_container';
import SessionFormContainer from './homepage/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import ProfilePageContainer from './profile_page/profile_page_container.js';
import { Route } from 'react-router-dom';
import { AuthRoute } from './../util/route_util';



const App = () => (
  <div>
    <Route exact path="/" component={HomePageContainer}/>
    <Route exact path="/stream" component={LoginHomePageContainer} />
    <Route exact path="/:username" component={ProfilePageContainer} />

  </div>
);

export default App;
