export const fetchTracks = user => (
  $.ajax({
    method: 'GET',
    url: '/api/tracks',
  })
);

export const createTrack = (track) => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks/',
    contentType: false,
    processData: false,
    data: track
  })
);

export const destroyTrack = (track) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${track.id}`
  })
);

export const updateTrack = (track) => (
  $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: {track},
  })
);
