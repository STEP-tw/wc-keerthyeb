const justifyLength = function(text, width) {
  let spaceWidth = width - text.toString().length;
  return repeatSymbol(spaceWidth, " ") + text;
};

const repeatSymbol = function(times, symbol) {
  times = Math.max(0, times);
  return new Array(times).fill(symbol).join("");
};

module.exports = { justifyLength };
