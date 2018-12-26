const { getCount } = require("./util.js");
const { parse } = require("./parser.js");
const { formatText } = require("./formatter.js");

const wc = function(args, fs) {
  let { fileName, option } = parse(args);
  let fileDetails = getFileDetails(fileName, fs);
  let [lineCount, wordCount, charCount] = getCount(fileDetails.content);
  return handleOutput(fileName, option, lineCount, wordCount, charCount);
};

const handleOutput = function(
  fileName,
  option,
  lineCount,
  wordCount,
  charCount
) {
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

module.exports = { wc };
