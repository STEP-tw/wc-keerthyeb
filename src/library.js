const { justifyLength } = require("./util.js");

const wc = function(args, fs) {
  let fileDetails = getFileDetails(args[0], fs);
  let getCount = count.bind(null, fileDetails.content);
  let lineCount = getCount("\n");
  let charCount = getCount("");
  let wordCount = countWord(fileDetails.content);
  return formatText(fileDetails.fileName, lineCount, wordCount, charCount);
};

const count = function(fileContent, delimiter) {
  return fileContent.split(delimiter).length;
};

const countWord = function(fileContent) {
  return fileContent
    .replace(/\n/g, " ")
    .split(" ")
    .filter(word => word != "").length;
};

const getFileDetails = function(fileName, fs) {
  return {
    fileName: fileName,
    content: readFileContent(fs, fileName),
    isExist: true
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
