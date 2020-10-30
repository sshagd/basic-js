const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  let teamNameArr = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] !== 'string'){
      continue;
    }
    members[i] = members[i].replace(/\s/g, '').toUpperCase();
    teamNameArr.push(members[i][0]);
  }

  return teamNameArr.sort().join('');
};
