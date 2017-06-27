import values from 'lodash/values';
import merge from "lodash/merge";

export const selectAllTracks = ({ tracks }) => {
  let tracksClone = merge({}, tracks);
  delete tracksClone.showTrack;
  return values(tracksClone);
};

export const selectAllComments = (comments) => {
  let myComments = merge({}, comments);
  return values(comments);
};

export const selectAllTrackIds = ({ tracks }) => {
  let tracksClone = merge({}, tracks);
  let trackArray = values(tracksClone);
  return trackArray.map(track => track.id);
};


export const selectArtistTracks = ( artist ) => values(artist.tracks);
export const selectArtistTrackIds = ( artist ) => {
  let artistTracks = values(artist.tracks);
  return artistTracks.map(track => track.id);
};
