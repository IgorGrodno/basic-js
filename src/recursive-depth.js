const { match } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth = 0;
    for (let i of arr) {
      if (Array.isArray(i)) {
        count = this.calculateDepth(i);
        if (depth < count) {
          depth = count;
        }
      }
    }
    return 1 + depth;
  }
};
