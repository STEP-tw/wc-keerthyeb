const { getCount } = require("./util.js");
const { parse } = require("./parser.js");
const { formatOutput } = require("./formatter.js");

const wc = function(args, fs) {
  let { fileNames, options } = parse(args);
  let fileDetails = fileNames.map(fileName =>
    getFileDetails(fileName, options, fs)
  );
  return formatOutput(fileDetails);
};

const getFileDetails = function(fileName, options, fs) {
  let content = readFileContent(fs, fileName);
  let counts = getCount(content, options);
  return { fileName, counts };
};

const readFileContent = function(fs, fileName) {
  return fs.readFileSync(fileName, "UTF8");
};

module.exports = { wc };
