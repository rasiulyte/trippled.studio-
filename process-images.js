const { Jimp } = require('jimp');
const path = require('path');

const files = [
  'art-1.jpg',
  'art-2.jpg',
  'art-3.jpg',
  'art-4.jpg',
  'art-5.jpg'
];

(async () => {
  for (const file of files) {
    const inputPath = path.join(__dirname, 'assets', file);
    const outputPath = path.join(__dirname, 'assets', file.replace('.jpg', '-clean.jpg'));
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const cropWidth = Math.round(width * 0.92);
    const cropHeight = Math.round(height * 0.9);
    const x = Math.round((width - cropWidth) / 2);
    const y = Math.round((height - cropHeight) / 2);

    image.crop({ x, y, w: cropWidth, h: cropHeight });

    await image.write(outputPath);
    console.log(`Processed ${file} -> ${path.basename(outputPath)}`);
  }
})();
