const { appBuild, appPublic, appSprite } = require('./paths');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = isProduction => {
  // make spirte image, json
  const getSpriteSmithPlugin = dirNames => {
    return dirNames.map(dir => {
      return new SpritesmithPlugin({
        src: {
          cwd: `${appSprite}/${dir}`,
          glob: '**/*.png',
        },
        target: {
          image: `${
            isProduction ? appBuild : appPublic
          }/images/sprites/sprite-${dir}.png`,
          css: [
            [
              `${appSprite}/sprite-${dir}.json`,
              {
                format: 'json_array',
              },
            ],
          ],
        },
        apiOptions: {
          cssImageRef: `/images/sprites/sprite-${dir}.png`,
        },
        spritesmithOptions: {
          algorithm: 'top-down',
          padding: 10,
        },
      });
    });
  };

  return {
    plugins: [
      // image sprite
      ...getSpriteSmithPlugin(['icon', 'global']),
    ],
  };
};
