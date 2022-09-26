const replaceStringInFile = require('../utils/replaceStringInFile');

const setName = (dirDst, nameNew) => {
  const nameOld = 'Tyl Rewards';
  const path = 'MyNewAppName2'

  replaceStringInFile(`${dirDst}/android/app/src/main/res/values/strings.xml`, nameOld, nameNew);
  replaceStringInFile(`${dirDst}/ios/${path}/Info.plist`, nameOld, nameNew);
};

module.exports = setName;
