export const debounce = (value, setValue, delay) => {
  setTimeout(() => {
    setValue(value);
  }, delay);
};
