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
