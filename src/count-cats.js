const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result =0;
  let arr = matrix.flat();
  arr.forEach(element => {
    if (element=='^^')
    {
      result++;
    }
  });
  return  result;
};
