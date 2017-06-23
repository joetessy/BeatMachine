import React from 'react';
import HomePageContainer from './homepage/homepage_container';
import LoginHomePageContainer from './login_homepage/login_homepage_container';
import SessionFormContainer from './homepage/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import ArtistPageContainer from './artist_page/artist_page_container.js';
import UploadTrackFormContainer from './track/upload_track_form_container';
import ModalContainer from './modal/modal_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';




const App = () => (
  <div>
    <ModalContainer/>
    <Switch>
      <Route
        exact path="/" component={HomePageContainer}/>
      <ProtectedRoute
        exact path="/stream" component={LoginHomePageContainer} />
      <ProtectedRoute
        exact path="/upload" component={UploadTrackFormContainer}/>
      <ProtectedRoute
        exact path="/:username" component={ArtistPageContainer} />
    </Switch>
  </div>
);

export default App;
