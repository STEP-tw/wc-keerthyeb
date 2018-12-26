const { justifyLength } = require("./util.js");

const formatCount = function(counts) {
  return counts.map(count => justifyLength(count, 8)).join("");
};

const formatText = function(fileName, counts) {
  return formatCount(counts) + " " + fileName;
};

module.exports = { formatText };
