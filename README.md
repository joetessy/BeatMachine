# BeatMachine

[BeatMachine Live][heroku]

[heroku]: https://thebeatmachine.herokuapp.com

BeatMachine is a full-stack web application clone of the popular music-sharing site SoundCloud. It was built using Ruby on Rails for the backend, and React.js with Redux for the frontend.

## Features

### Tracks

Users can access a general feed of audio tracks on a home page that are fetched from the database when the page loads. Tracks, images, and user avatars are attached using the Paperclip attachment gem and are hosted on Amazon Web Services. In addition to the general feed, Each user has a profile page that displays their own tracks. Users can upload, edit and delete their own tracks from their profile page. Tracks also have their own respective show page where users can add comments. Users have the ability to delete their own comments as well as any comments on one of their track show pages.

![image of track page](/docs/wireframes/5-Track.png)



### Favorites

Users have the ability to favorite tracks. They can do this by clicking a heart icon on the general feed, a user page, or a track show page. The favorite button will render in black by default and orange if the current user has favorited the track. The button also displays the total number of times the track has been favorited. Example below:

Liked by current user
![Liked by Current User](/docs/wireframes/favorited.png)

Liked by other users
![Liked by Other Users](/docs/wireframes/twolikes.png)

Liked by no users
![Liked by No Users](/docs/wireframes/nolikes.png)



 Below is the rendering logic for the 'favorite' button.

```
if (this.props.currentUser.favorite_tracks.includes(this.props.track.id)){
  likeClass = 'liked-button'; //Current users likes are orange
  countClass = 'liked-count';
} else {
  likeClass = 'like-button'; //Other likes are black
  countClass = 'like-count';
}
let trackCount = null;
if (this.props.track.favorited_users.length >= 1){
  trackCount = <div className={countClass}>
      {`  ${this.props.track.favorited_users.length}`}</div>;
}
```

### Player

The audio player is the primary feature of BeatMachine. Users should be able to log in, navigate through the app, and log out while music is streaming continuously. The player will persist from page to page including moving backwards and forward through history. The music feed has a natural playback queue that is initialized and altered through pressing track index play buttons. When a track end, the player will load and play the next track in the queue. Below is a code snippet that shows how the player checks if a track has ended before playing the next track in the queue.

```
checkTime(){
    this.interval = setInterval(() => this.myInterval(), 200);
  }

myInterval(){
  if (!this.music){
    clearInterval(this.interval);
    this.interval = null;
  } else if (this.music.ended){
    this.nextTrack();
  }
  this.updateTime();
}
```

 The track index item play button will show a 'play' or 'pause' icon depending on whether the track is currently playing or not. The logic below allows the correct button icon to persist across different pages.

```

    let icon;
    if (this.props.nowPlaying.id === this.props.track.id
      & this.props.nowPlaying.playing === true){

      icon = <i className="fa fa-pause" aria-hidden="true"></i>;
    } else {
      icon = <i className="fa fa-play" aria-hidden="true"></i>;
    }

    let buttonClass = '';
    if (this.props.location.pathname === '/' &&
      this.props.nowPlaying.id === this.props.track.id
      && this.props.nowPlaying.playing === true){
      buttonClass='play-button-show';
    }

```

Finally, audio can also be controlled through using the audio player's control buttons.


## Next Steps

I plan on adding the below features to this app to make BeatMachine complete.

### Stat Pages

BeatMachine is intended to be a social app for users to discover new music.  After creating the ability for users to follow each other, I will create show pages for Favorites, Followers, and Followings that the user can access via a sidebar.

### Functionality

Instead of fetching all tracks from the database, users will only see the 20 most-recently uploaded tracks from users they are following. Once the user scrolls to the bottom of the page, the app will fetch more tracks, allowing the user to infinitely scroll through the feed.

### Design

Each track item currently shows an image of a waveform. I intend to replace this with an actual audio waveform for the track that will also serve as a progress bar.  I also intend to re-style the app to have a mobile-first responsive layout.
