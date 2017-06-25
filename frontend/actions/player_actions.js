export const RECEIVE_AUDIO = 'RECEIVE_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';

export const receiveAudio = (queue) => ({
  type: RECEIVE_AUDIO,
  queue,
});

export const stopAudio = () => ({
  type: STOP_AUDIO
});
