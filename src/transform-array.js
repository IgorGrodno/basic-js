const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr1) {
  let result = [];
  let arr = arr1.slice();
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let a = i;
      switch (arr[i]) {
        case "--discard-next":
          {
            delete arr[i + 1];
            //  i = i + 1;
          }
          break;
        case "--discard-prev":
          if (result.length > 0 && arr[i - 1] !== undefined) {
            result.pop();
          }
          break;
        case "--double-next":
          if (arr[i + 1] !== undefined) {
            result.push(arr[i + 1]);
          }
          break;
        case "--double-prev":
          if (arr[i - 1] !== undefined) {
            result.push(arr[i - 1]);
          }
          break;
        default:
          if (arr[i] !== undefined) {
            result.push(arr[i]);
          }
          break;
      }
    }
    return result;
  } else {
    throw new Error("Error");
  }
};
