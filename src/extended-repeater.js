const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  result = "";
  if (options.repeatTimes != undefined) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }

  if (options.separator != undefined) {
    separator = String(options.separator);
  } else {
    separator = "+";
  }

  if (options.additionRepeatTimes != undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if (options.additionSeparator != undefined) {
    additionSeparator = String(options.additionSeparator);
  } else {
    additionSeparator = "|";
  }

  let addition = options.addition;

  if (options.addition != undefined) {
    addition = String(options.addition);
  }
  if (options.addition === null) {
    addition = "null";
  }

  if (addition != undefined) {
    let tmp = [];
    let tmpA = [];
    for (let i = 0; i < repeatTimes; i++) {
      for (let a = 0; a < additionRepeatTimes; a++) {
        tmpA[a] = String(addition);
      }
      tmp[i] = str + tmpA.join(additionSeparator);
    }
    result = tmp.join(separator);
  } else {
    let tmpArr = [];
    for (let i = 0; i < repeatTimes; i++) {
      tmpArr.push(str);
      result = tmpArr.join(separator);
    }
  }
  return result;
};
