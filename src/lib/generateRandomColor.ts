export const generateRandomColor = () =>
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
