const copyDirectory = require('../tasks/copyDirectory');
const install = require('../tasks/install');
const setIcon = require('../tasks/setIcon');
const setId = require('../tasks/setId');
const setName = require('../tasks/setName');

const build = (config, dirSrc, dirDst) => {
  copyDirectory(dirSrc, dirDst);
  setId(dirDst, config.id);
  setName(dirDst, config.name);
  setIcon(dirDst, config.iconsPath);
  install(dirDst);
};

module.exports = build;
