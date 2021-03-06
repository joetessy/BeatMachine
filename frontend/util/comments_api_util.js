export const fetchComments = (trackTitle) => (
  $.ajax({
    method: 'GET',
    url: `/api/tracks/${trackTitle}/comments`
  })
);

export const createComment = (comment) => ($.ajax({
    method: 'POST',
    url: `api/tracks/${comment.track}/comments/`,
    data: comment
  })
);


export const deleteComment = (id) => ($.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
  })
);
