const {
  rightJustifier,
  isSingleFile,
  add2List,
  SPACE,
  NEW_LINE,
  EMPTY_STRING
} = require("./util.js");

const formatOutput = function(fileDetails) {
  let content = fileDetails.map(formatFileDetail);

  if (isSingleFile(fileDetails)) {
    return content.join(EMPTY_STRING);
  }
  let totalCount = [0, 0, 0];
  fileDetails.forEach(fileDetail => {
    totalCount = add2List(totalCount, fileDetail.counts);
  });
  totalCount = totalCount.filter(count => !isNaN(count));
  content.push(formatCount(totalCount) + SPACE + "total");
  return content.join(NEW_LINE);
};

const formatCount = function(counts) {
  return counts.map(count => rightJustifier(count)).join(EMPTY_STRING);
};

const formatFileDetail = function(fileDetail) {
  return formatCount(fileDetail.counts) + SPACE + fileDetail.fileName;
};

module.exports = { formatOutput };
