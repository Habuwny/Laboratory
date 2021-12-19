export const randomKey = (name) => {
  if (name !== undefined) {
    return name + "-" + Math.random().toString(36).substr(2, 36);
  }
  return Math.random().toString(36).substr(2, 20);
};
