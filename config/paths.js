'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSprite: resolveApp('src/images/sprites'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
};
