# BeaatMachine

[BeatMachine Live][heroku]

[heroku]: https://thebeatmachine.herokuapp.com

BeatMachine is a full-stack web application clone of the popular music-sharing site SoundCloud. It was built using Ruby on Rails for the backend, and React.js with Redux for the frontend.

## Features

### Tracks

Users can access a general feed of audio tracks on the home page that are fetched from the database on page load. Tracks, images, and user avatars are attached using the Paperclip attachment Gem and hosted on Amazon Web Services. In addition to the general feed, Each user has a profile page that displays their own tracks. Users can upload, edit and delete their own tracks from their profile page. Tracks also have their own respective show page where users can add comments. Users have the ability to delete their own comments as well as any comments on one of their track's pages

### Favorites

Users have the ability to favorite tracks. They can do this byclicking the 'heart' icon from either the general feed, a user page, or a track show page. This icon will also display the number of likes for its respective track. The current user's favorites are highlighted orange. A future version of this app will have a sidebar displaying tracks liked by the current user that will navigate to a 'favorites' show page.


### Player

The audio player is the primary feature of BeatMachine. Users should be able to log in, navigate through the app, and log out while music is streaming continuously. The player will persist from page to page including moving backwards and forward through history. The music feed has a natural playback queue that is initialized and altered through pressing track index play buttons. Audio can also be controlled through using the audio player's control buttons.


## Next Steps

I plan on adding the below features to this app to make BeatMachine complete.

### Stat Pages

BeatMachine is intended to be a social app for users to discover new music.  After creating the ability for users to follow each other, I will create show pages for Favorites, Followers, and Followings that the user can access via a sidebar.

### Functionality

Instead of fetching all tracks from the database, users will only see the 20 most-recently uploaded tracks from users they are following. Once the user scrolls to the bottom of the page, the app will fetch more tracks, allowing the user to infinitely scroll through the feed.

### Design

Currently, each track item shows an image of a waveform. I intend to replace this with an actual audio waveform for the track.  I also intend to re-style the app to have a mobile-first responsive layout.
