const { justifyLength, getCount } = require("./util.js");
const { parse } = require("./parser.js");

const wc = function(args, fs) {
  let { fileName, option } = parse(args);
  let fileDetails = getFileDetails(fileName, fs);
  let [lineCount, wordCount, charCount] = getCount(fileDetails.content);
  if (option == undefined) {
    return formatText(fileName, [lineCount, wordCount, charCount]);
  }
  const options = { l: lineCount, c: charCount, w: wordCount };
  return formatText(fileName, [options[option]]);
};

const getFileDetails = function(fileName, fs) {
  return {
    fileName: fileName,
    content: readFileContent(fs, fileName)
  };
};

const readFileContent = function(fs, fileName) {
  return fs.readFileSync(fileName, "UTF8");
};

const formatText = function(fileName, counts) {
  return counts.map(count => justifyLength(count, 8)).join("") + " " + fileName;
};

module.exports = { wc };
