import values from 'lodash/values';


export const selectAllTracks = ({ tracks }) => values(tracks);

export const selectUserTracks = ({ tracks }) => {
  let result = [];
  let trackArray = selectAllTracks({tracks});
  if (trackArray.length > 0 ){
    for (var i = 0; i < trackArray.length; i++) {
      if (trackArray[i].artist === window.location.hash.slice(2)){
        result.push(trackArray[i]);
      }
    }
  }
  return result;
};
