const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.repeatTimes === undefined) {
    return str + options.addition;
  }

  if(options.separator === undefined) {
    options.separator = '+';
  }

  let newStr = str;
  for (let i=1; i<=options.repeatTimes; i++){

    let subStr = '';
    for (let i=1; i<=options.additionRepeatTimes; i++){
      if(i === options.additionRepeatTimes){
        subStr = subStr + `${options.addition}`;
        break;
      }
      subStr = subStr + `${options.addition}${options.additionSeparator}`
    }

    if(i === options.repeatTimes){
      return  newStr + subStr;
    }

    newStr = newStr + subStr + options.separator + str
  }
};
  