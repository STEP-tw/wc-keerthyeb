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

const add2List = function(list1, list2) {
  let length = Math.max(list1.length, list2.length);
  let addedList = [];
  for (let index = 0; index < length; index++) {
    addedList[index] = list1[index] + list2[index];
  }
  return addedList;
};

const getCount = function(fileContent, options) {
  let counts = { line: countLine, word: countWord, character: countChar };
  return options.map(option => counts[option](fileContent));
};

const countLine = fileContent => fileContent.split(NEW_LINE).length - 1;

const countChar = fileContent => fileContent.length;

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
  add2List,
  SPACE,
  NEW_LINE,
  EMPTY_STRING
};
