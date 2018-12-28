const HYPHEN = "-";

const hasOption = arg => arg.startsWith(HYPHEN);

const createParsedObject = function(fileNames, userOptions) {
  let options = filterOption(userOptions);
  return { fileNames, options };
};

const parse = function(args) {
  let options = args.filter(option => hasOption(option));
  let fileNames = args.slice(options.length);
  options = [options.join("")];
  options = options[0].split("");
  return createParsedObject(fileNames, options);
};

const filterOption = function(userOptions) {
  if (userOptions.length == 0) {
    userOptions = ["l", "w", "c"];
  }
  const options = ["l", "w", "c"];
  return options.filter(option => userOptions.includes(option));
};

module.exports = { parse };
