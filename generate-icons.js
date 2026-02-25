const sharp = require('sharp');

(async () => {
  // Generate all required icon sizes from launch-icon.png
  await sharp('launch-icon.png').resize(192, 192).png().toFile('public/icon-192x192.png');
  console.log('Created icon-192x192.png');

  await sharp('launch-icon.png').resize(512, 512).png().toFile('public/icon-512x512.png');
  console.log('Created icon-512x512.png');

  // favicon as 32x32 ICO (saved as PNG, browsers accept it)
  await sharp('launch-icon.png').resize(32, 32).png().toFile('public/favicon.ico');
  console.log('Created favicon.ico');

  // Apple touch icon 180x180
  await sharp('launch-icon.png').resize(180, 180).png().toFile('public/apple-touch-icon.png');
  console.log('Created apple-touch-icon.png');

  console.log('All icons generated!');
})();
