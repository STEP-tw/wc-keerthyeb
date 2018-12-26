const { getCount } = require("./util.js");
const { parse } = require("./parser.js");
const { formatText } = require("./formatter.js");

const wc = function(args, fs) {
  let { fileNames, options } = parse(args);
  let fileDetails = fileNames.map(fileName => getFileDetails(fileName, fs));
  let counts = fileDetails.map(fileDetail => getCount(fileDetail.content));
  return handleOutput(fileNames, options, counts);
};

const handleOutput = function(fileNames, userOptions, counts) {
  if (userOptions.length == 0) {
    return formatText(fileNames, counts);
  }
  const options = { l: 0, w: 1, c: 2 };
  let a = counts.map(count =>
    userOptions.map(option => count[options[option]])
  );
  return formatText(fileNames, a);
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
