export const cardTitle = (title, category) => {
  return `What is ${
    ["a", "e", "i", "o", "u"].includes(title[0].toLowerCase()) ? "an " : "a "
  }
  ${title} ${category}?`;
};
