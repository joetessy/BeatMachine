import values from 'lodash/values';
import merge from "lodash/merge";

export const selectAllTracks = ({ tracks }) => {
  let tracksClone = merge({}, tracks);
  delete tracksClone.showTrack;
  return values(tracksClone);
};

export const selectArtistTracks = ( artist ) => values(artist.tracks);
