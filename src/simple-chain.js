const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push("( )");
      return this;
    } else {
      if (value === null) {
        this.arr.push("( " + null + " )");
        return this;
      } else {
        this.arr.push("( " + value.toString() + " )");
        return this;
      }
    }
  },
  removeLink(position) {
    if (this.arr[position - 1] !== undefined) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error("Error");
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join("~~");
    this.arr = [];
    return str;
  },
};

module.exports = chainMaker;
