const { wc } = require("../src/library.js");
const assert = require("assert");

const files = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("\n"),
  letters: "a  b c"
};

const fs = {
  readFileSync: file => {
    return files[file];
  }
};

describe("wc", function() {
  it("should return lineCount,wordCount and character count of a file", function() {
    const actualOutput = wc(["numbers"], fs);
    const expectedOutput = "       9      10      20 numbers";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return counts for file which contain multiple space ", function() {
    const actualOutput = wc(["letters"], fs);
    const expectedOutput = "       0       3       6 letters";
    assert.deepEqual(actualOutput, expectedOutput);
  });
});

it("should return line count if option l is given ", function() {
  const actualOutput = wc(["-l", "letters"], fs);
  const expectedOutput = "       0 letters";
  assert.deepEqual(actualOutput, expectedOutput);
});

it("should return line count if option w is given ", function() {
  const actualOutput = wc(["-w", "letters"], fs);
  const expectedOutput = "       3 letters";
  assert.deepEqual(actualOutput, expectedOutput);
});

it("should return line count if option c is given ", function() {
  const actualOutput = wc(["-c", "letters"], fs);
  const expectedOutput = "       6 letters";
  assert.deepEqual(actualOutput, expectedOutput);
});
