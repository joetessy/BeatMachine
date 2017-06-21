import values from 'lodash/values';


export const selectAllTracks = ({ tracks }) => values(tracks);

export const selectCurrentUserTracks = ({ tracks, currentUser }) => {
  let result = [];
  if (tracks !== null ){
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].id === currentUser.id){
        result.push(tracks[i]);
      }
    }
  }
  return result;
};
