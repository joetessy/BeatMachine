import values from 'lodash/values';


export const selectAllTracks = ({ tracks }) => values(tracks);

export const selectArtistTracks = ({ artist }) => values(artist.tracks);
