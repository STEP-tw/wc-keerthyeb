const SPACE = " ";
const EMPTY = "";
const NEW_LINE = "\n";

const justifyCount = function(text, width) {
  let spaceWidth = width - text.toString().length;
  return repeatSymbol(spaceWidth, SPACE) + text;
};

const repeatSymbol = function(times, symbol) {
  times = Math.max(0, times);
  return new Array(times).fill(symbol).join(EMPTY);
};

const getCount = function(fileContent) {
  const lineCount = countLine(fileContent);
  const wordCount = countWord(fileContent);
  const charCount = countChar(fileContent);
  return [lineCount, wordCount, charCount];
};

const countLine = fileContent => fileContent.split(NEW_LINE).length - 1;

const countChar = fileContent => fileContent.split(EMPTY).length;

const countWord = function(fileContent) {
  return fileContent
    .replace(/\n/g, SPACE)
    .split(SPACE)
    .filter(word => word !== EMPTY).length;
};

const isSingleFile = file => file.length == 1;

module.exports = {
  getCount,
  justifyCount,
  isSingleFile
};
