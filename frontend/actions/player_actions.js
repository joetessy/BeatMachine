export const RECEIVE_AUDIO = 'RECEIVE_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';

export const receiveAudio = (url) => ({
  type: RECEIVE_AUDIO,
  url,
});

export const stopAudio = () => ({
  type: STOP_AUDIO
});
