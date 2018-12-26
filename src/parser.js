const HYPHEN = "-";

const hasOption = arg => arg.startsWith(HYPHEN);

const createParsedObject = (fileName, userOptions = []) => {
  let options = orderOption(userOptions);
  return { fileName, options };
};

const parse = args => {
  let firstArg = args[0];
  let secondArg = args[1];

  if (hasOption(firstArg)) {
    return createParsedObject(secondArg, firstArg.slice(1).split(""));
  }

  return createParsedObject(firstArg);
};

const orderOption = function(userOptions) {
  const options = ["l", "w", "c"];
  return options.filter(option => userOptions.includes(option));
};

module.exports = { parse };
