const sharp = require('sharp');

// Create a simple red circle icon with skull emoji
const createIcon = async (size, filename) => {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="30%" cy="30%">
          <stop offset="0%" style="stop-color:#ff4444;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#cc0000;stop-opacity:1" />
        </radialGradient>
      </defs>
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="url(#grad)" />
      <text x="50%" y="50%" font-size="${size*0.5}" text-anchor="middle" dy=".35em">💀</text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .png()
    .toFile(`public/${filename}`);
  
  console.log(`Created ${filename}`);
};

(async () => {
  await createIcon(192, 'icon-192x192.png');
  await createIcon(512, 'icon-512x512.png');
  await createIcon(32, 'favicon.ico');
  console.log('All icons created successfully!');
})();
