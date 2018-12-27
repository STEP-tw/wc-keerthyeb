const SPACE = " ";
const EMPTY_STRING = "";
const NEW_LINE = "\n";
const WIDTH = 8;

const justifyCount = function(width, text) {
  let spaceWidth = width - text.toString().length;
  return repeatSymbol(spaceWidth, SPACE) + text;
};

const rightJustifier = justifyCount.bind(null, WIDTH);

const repeatSymbol = function(times, symbol) {
  times = Math.max(0, times);
  return new Array(times).fill(symbol).join(EMPTY_STRING);
};

const getCount = function(fileContent) {
  const lineCount = countLine(fileContent);
  const wordCount = countWord(fileContent);
  const charCount = countChar(fileContent);
  return [lineCount, wordCount, charCount];
};

const countLine = fileContent => fileContent.split(NEW_LINE).length - 1;

const countChar = fileContent => fileContent.split(EMPTY_STRING).length;

const countWord = function(fileContent) {
  return fileContent
    .replace(/\n/g, SPACE)
    .split(SPACE)
    .filter(isEmpty).length;
};

const isSingleFile = file => file.length == 1;

const isEmpty = element => element !== EMPTY_STRING;

module.exports = {
  getCount,
  rightJustifier,
  isSingleFile,
  SPACE,
  NEW_LINE,
  EMPTY_STRING
};
