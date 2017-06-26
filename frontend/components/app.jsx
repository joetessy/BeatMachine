import React from 'react';
import { connect } from 'react-redux';
import HomePageContainer from './homepage/homepage_container';
import LoginHomePageContainer from './login_homepage/login_homepage_container';
import ArtistPageContainer from './artist_page/artist_page_container.js';
import UploadTrackFormContainer from './track/upload_track_form_container';
import ModalContainer from './modal/modal_container';
import PlayerContainer from './player/player';
import TrackPage from './track/track_page';
import Favicon from 'react-favicon';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';


const App = (props) => (
  <div>
    <Favicon url={'http://www.favicon.cc/logo3d/29288.png'}/>
    <ModalContainer/>
    <Switch>
      <Route
        exact path="/" component={HomePageContainer}/>
      <ProtectedRoute
        exact path="/stream" component={LoginHomePageContainer} />
      <ProtectedRoute
        exact path="/upload" component={UploadTrackFormContainer}/>
      <Route
        exact path="/:username" component={ArtistPageContainer} />
      <Route
        exact path="/:username/:title" component={TrackPage}/>
    </Switch>
    <ProtectedRoute path="/" component={PlayerContainer} />
  </div>
);

export default App;
