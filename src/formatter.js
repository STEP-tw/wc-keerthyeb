const { justifyCount, isSingleFile } = require("./util.js");

const formatCount = function(counts) {
  return counts.map(count => justifyCount(count, 8)).join("");
};

const formatText = function(fileNames, counts) {
  let content = fileNames.map(
    (fileName, index) => formatCount(counts[index]) + " " + fileName
  );
  if (isSingleFile(fileNames)) {
    return content.join("");
  }
  let total_count = counts.reduce((currentCount, nextCount) =>
    currentCount.map((count, index) => count + nextCount[index])
  );
  content.push(formatCount(total_count) + " total");
  return content.join("\n");
};

module.exports = { formatText };
