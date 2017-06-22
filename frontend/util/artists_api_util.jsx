export const fetchArtist = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  })
);
