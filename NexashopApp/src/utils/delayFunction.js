export const delayFunction = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
