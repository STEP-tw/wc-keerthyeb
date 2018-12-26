const HYPHEN = "-";

const hasOption = arg => arg.startsWith(HYPHEN);

const createParsedObject = (fileName, userOptions) => {
  let options = orderOption(userOptions);
  return { fileName, options };
};

const parse = args => {
  let options = args.filter(option => hasOption(option));
  options = options.map(option => option.slice(1));
  let fileNames = args.slice(options.length);

  if (options.length == 1) {
    options = options[0].split("");
  }
  return createParsedObject(fileNames, options);
};

const orderOption = function(userOptions) {
  const options = ["l", "w", "c"];
  return options.filter(option => userOptions.includes(option));
};

module.exports = { parse };
