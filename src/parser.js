const HYPHEN = "-";

const hasOption = arg => arg.startsWith(HYPHEN);

const createParsedObject = function(fileNames, userOptions) {
  let options = orderOption(userOptions);
  return { fileNames, options };
};

const parse = function(args) {
  let options = args.filter(option => hasOption(option));
  let fileNames = args.slice(options.length);
  options = [options.join("")];
  options = options[0].split("");
  if (options.length == 0) {
    options = ["l", "w", "c"];
  }
  return createParsedObject(fileNames, options);
};

const orderOption = function(userOptions) {
  const options = ["l", "w", "c"];
  return options.filter(option => userOptions.includes(option));
};

module.exports = { parse };
