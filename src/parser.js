const HYPHEN = "-";

const isOption = arg => arg.startsWith(HYPHEN);

const createParsedObject = function(fileNames, userOptions) {
  let options = filterOption(userOptions);
  return { fileNames, options };
};

const parse = function(args) {
  let options = [];
  if (isOption(args[0])) {
    options = getOptions(args);
  }
  let fileNames = args.slice(options.length);
  options = [options.join("")];
  options = options[0].split("");
  return createParsedObject(fileNames, options);
};

const filterOption = function(userOptions) {
  if (userOptions.length == 0) {
    return ["line", "word", "character"];
  }
  const validOptions = { l: "line", w: "word", c: "character" };
  let options = Object.keys(validOptions).filter(option =>
    userOptions.includes(option)
  );
  return options.map(option => validOptions[option]);
};

const getOptions = function(args) {
  let index = 0;
  let options = [];
  while (isOption(args[index])) {
    options.push(args[index]);
    index++;
  }
  return options;
};

module.exports = { parse };
