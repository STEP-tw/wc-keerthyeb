const justifyLength = function(text, width) {
  let spaceWidth = width - text.toString().length;
  return repeatSymbol(spaceWidth, " ") + text;
};

const repeatSymbol = function(times, symbol) {
  times = Math.max(0, times);
  return new Array(times).fill(symbol).join("");
};

const count = function(fileContent, delimiter) {
  return fileContent.split(delimiter).length;
};

const countWord = function(fileContent) {
  return fileContent
    .replace(/\n/g, " ")
    .split(" ")
    .filter(word => word !== "").length;
};

module.exports = { count, countWord, justifyLength };
