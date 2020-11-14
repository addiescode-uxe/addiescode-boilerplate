interface SpritedImage {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  source_image: string;
  image: string;
  escaped_image: string;
  total_width: number;
  total_height: number;
  offset_x: number;
  offset_y: number;
  px: SpritedImagePixcel;
}

interface SpritedImagePixcel {
  x: string;
  y: string;
  offset_x: string;
  offset_y: string;
  height: string;
  width: string;
  total_height: string;
  total_width: string;
}

const getImageInfo = (
  group: string,
  name: string
): SpritedImage | undefined => {
  const json: SpritedImage[] =
    require(`./../images/sprites/sprite-${group}`) || [];

  return json.find(({ name: imgName }) => name === imgName);
};

export const createSpritedImage = (
  group: string,
  name: string,
  ratio = 1
): string => {
  const image = getImageInfo(group, name);

  if (image) {
    const {
      width,
      height,
      px: { offset_x },
      y,
      escaped_image,
      total_width,
      total_height,
    } = image;

    return `
      background-repeat: no-repeat;
      background-size: ${(total_width / width) * 100}% auto;
      width: ${width * ratio}px;
      height: ${height * ratio}px;
      background-position-x: ${offset_x};
      background-position-y: ${(y / (total_height - height)) * 100}%;
      background-image: url(${escaped_image});
    `;
  }

  return '';
};
