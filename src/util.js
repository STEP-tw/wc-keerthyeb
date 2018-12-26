const SPACE = " ";
const NEW_LINE = "\n";
const EMPTY = "";

const justifyLength = function(text, width) {
  let spaceWidth = width - text.toString().length;
  return repeatSymbol(spaceWidth, SPACE) + text;
};

const repeatSymbol = function(times, symbol) {
  times = Math.max(0, times);
  return new Array(times).fill(symbol).join(EMPTY);
};

const count = function(fileContent, delimiter) {
  return fileContent.split(delimiter).length;
};

const countWord = function(fileContent) {
  return fileContent
    .replace(/\n/g, SPACE)
    .split(SPACE)
    .filter(word => word !== EMPTY).length;
};

module.exports = { count, countWord, justifyLength };
