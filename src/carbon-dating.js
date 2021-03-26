const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let result = false;

  if (sampleActivity != undefined && typeof sampleActivity === "string") {
    if (
      parseInt(sampleActivity) != NaN &&
      parseInt(sampleActivity) > 0 &&
      parseInt(sampleActivity) < 15
    ) {
      result =
        Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
      result = Math.ceil(result);
    }
  }
  return result;
};
