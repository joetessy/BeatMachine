# FresherNote

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/

## Minimum Viable Product

BeatMachine is a web-app clone of SoundCloud built with Ruby on Rails and
React/Redux. It will have the following features.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Track Crud
- [ ] Plays songs with progress bar with continuous play
- [ ] Comments
- [ ] User Pages
- [ ] Bonus: Wave Forms
- [ ] Bonus: Infinite Scroll
- [ ] Bonus: Reposts, Playlists, Tags
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end authentication

### Phase 2: Tracks Model API, Components, AWS Web Hosting (2 days)

**Objective:** Seed DB. Tracks and images are hosted on AWS. CRUD API features for tracks. Create track container components.

### Phase 3: The Feed (2 days)

**Objective:** Complete home page & user page. Both will show a feed of tracks.

### Phase 4: Footer Player (1 day)

**Objective:** Complete footer audio player that persists between page changes.

### Phase 5: Add Comment, Favorite, Follow Features (1 day)

**Objective:** Users can comment on, favorite tracks, & follow other users.

## Phase 6: Likes, Followers, Followings, Comments Pages (1 days)

**Objective:** Users have separate show pages containing all favorites, followers, followings, comments.

### Bonus Features (TBD)
- [ ] Waveforms
- [ ] Infinite Scroll
- [ ] Reposts, Playlists, Tags
