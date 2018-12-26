const fs = require("fs");
const { wc } = require("./src/library.js");

const main = function() {
  console.log(wc(process.argv.slice(2), fs));
};

main();
