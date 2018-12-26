const HYPHEN = "-";

const hasOption = arg => arg.startsWith(HYPHEN);

const createParsedObject = (fileName, option) => {
  return { fileName, option };
};

const parse = args => {
  let firstArg = args[0];
  let secondArg = args[1];

  if (hasOption(firstArg)) {
    return createParsedObject(secondArg, firstArg.slice(1));
  }

  return createParsedObject(firstArg);
};

module.exports = { parse };
