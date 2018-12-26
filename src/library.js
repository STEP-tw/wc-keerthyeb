const { justifyLength, count, countWord } = require("./util.js");

const NEW_LINE = "\n";
const EMPTY = "";

const wc = function(args, fs) {
  let fileDetails = getFileDetails(args[0], fs);
  let getCount = count.bind(null, fileDetails.content);
  let lineCount = getCount(NEW_LINE) - 1;
  let charCount = getCount(EMPTY);
  let wordCount = countWord(fileDetails.content);
  return formatText(fileDetails.fileName, lineCount, wordCount, charCount);
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

const formatText = function(fileName, lineCount, wordCount, charCount) {
  return (
    justifyLength(lineCount, 8) +
    justifyLength(wordCount, 8) +
    justifyLength(charCount, 8) +
    " " +
    fileName
  );
};

module.exports = { wc };
