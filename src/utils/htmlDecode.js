export const htmlDecode = (input) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
};
