const CracoLessPlugin = require('craco-less');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const getWebpackConfig = require('./config/webpack.config');
const { ENVIROMENTS, initLog } = require('./config/values');
const CracoAlias = require('craco-alias');

module.exports = function ({ env }) {
  const isProduction = env === ENVIROMENTS.product;
  process.env.IS_PRODUCTION = isProduction;

  !isProduction && console.log(initLog);
  !isProduction && console.log(env);

  return {
    webpack: {
      plugins: [new AntdDayjsWebpackPlugin()],
    },
    plugins: [
      // craco alias
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          baseUrl: './src',
          tsConfigPath: './tsconfig.path.json',
        },
      },
      // craco less
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
    webpack: getWebpackConfig(isProduction),
  };
};
