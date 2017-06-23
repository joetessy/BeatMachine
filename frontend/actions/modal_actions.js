export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
export const RECEIVE_COMPONENT = 'RECEIVE_COMPONENT';


export const closeModal = (component) => ({
  type: CLOSE,
  component: null
});

export const openModal = (component) => ({
  type: OPEN,
  component,
});

export const receiveComponent = (component) => ({
  type: RECEIVE_COMPONENT,
  component
});
