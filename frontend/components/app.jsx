import React from 'react';
import HomePageContainer from './homepage/homepage_container';
import LoginHomePageContainer from './login_homepage/login_homepage_container';
import SessionFormContainer from './homepage/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import ArtistPageContainer from './artist_page/artist_page_container.js';
import UploadTrackForm from './track/upload_track_form';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from './../util/route_util';



const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePageContainer}/>
      <Route exact path="/stream" component={LoginHomePageContainer} />
      <Route exact path="/upload" component={UploadTrackForm}/>
      <Route exact path="/:username" component={ArtistPageContainer} />
    </Switch>
  </div>
);

export default App;
