const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)) {
    members.forEach((element) => {
      if (typeof element === "string") {
        let str = element.trim();
        result.push(str[0].toUpperCase());
      }
    });
  }
  if (result.length > 0) {
    return result.sort().join("");
  } else {
    return false;
  }
};
