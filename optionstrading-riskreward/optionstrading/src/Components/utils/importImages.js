// src/utils/importImages.js

export const importAll = (context) => {
  let images = {};
  context.keys().forEach((item) => {
    images[item.replace('./', '')] = context(item);
  });
  return images;
};
