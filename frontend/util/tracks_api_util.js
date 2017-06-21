export const fetchTracks = user => (
  $.ajax({
    method: 'GET',
    url: '/api/tracks',
  })
);
