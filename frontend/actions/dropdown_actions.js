export const DISPLAY_DROPDOWN = 'DISPLAY_DROPDOWN';
export const CLEAR_DROPDOWN = 'CLEAR_DROPDOWN';

export const displayDropdown = (menu) => ({
  type: DISPLAY_DROPDOWN,
  menu,
});

export const clearDropdown = () => ({
  type: CLEAR_DROPDOWN,
});
