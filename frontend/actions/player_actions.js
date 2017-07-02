export const RECEIVE_AUDIO = 'RECEIVE_AUDIO';
export const NOW_PLAYING = 'NOW_PLAYING';

export const receiveAudio = (queue) => ({
  type: RECEIVE_AUDIO,
  queue,
});


export const nowPlaying = (id, idx, status) => ({
  type: NOW_PLAYING,
  idx,
  id,
  status
});
