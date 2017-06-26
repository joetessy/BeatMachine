export const fetchComments = (trackTitle) => (
  $.ajax({
    method: 'GET',
    url: `/api/tracks/${trackTitle}/comments`
  })
);
