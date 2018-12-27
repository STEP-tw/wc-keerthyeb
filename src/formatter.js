const {
  rightJustifier,
  isSingleFile,
  SPACE,
  NEW_LINE,
  EMPTY_STRING
} = require("./util.js");

const formatCount = function(counts) {
  return counts.map(count => rightJustifier(count)).join(EMPTY_STRING);
};

const formatText = function(fileNames, counts) {
  let content = fileNames.map(
    (fileName, index) => formatCount(counts[index]) + SPACE + fileName
  );
  if (isSingleFile(fileNames)) {
    return content.join(EMPTY_STRING);
  }
  let total_count = calculateTotal(counts);
  content.push(formatCount(total_count) + SPACE + "total");
  return content.join(NEW_LINE);
};

const calculateTotal = function(counts) {
  return counts.reduce((currentCount, nextCount) =>
    currentCount.map((count, index) => count + nextCount[index])
  );
};

module.exports = { formatText };
