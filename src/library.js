const { getCount } = require("./util.js");
const { parse } = require("./parser.js");
const { formatText } = require("./formatter.js");

const wc = function(args, fs) {
  let { fileName, options } = parse(args);
  let fileDetails = getFileDetails(fileName, fs);
  let [lineCount, wordCount, charCount] = getCount(fileDetails.content);
  return handleOutput(fileName, options, lineCount, wordCount, charCount);
};

const handleOutput = function(
  fileName,
  userOptions,
  lineCount,
  wordCount,
  charCount
) {
  if (userOptions.length == 0) {
    return formatText(fileName, [lineCount, wordCount, charCount]);
  }
  const options = { l: lineCount, c: charCount, w: wordCount };
  let counts = userOptions.map(option => options[option]);
  return formatText(fileName, counts);
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
