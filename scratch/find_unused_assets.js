const fs = require('fs');
const path = require('path');

const assets = [
  'about-photo.jpg',
  'bytecamp.jpg',
  'devfest.jpg',
  'hero-mosaic.png',
  'hero-photo.jpg',
  'hussnain.png',
  'portrait.jpg',
  'ai-campus.jpg',
  'automata-converter.jpg',
  'brand-identity.jpg',
  'design-system.jpg',
  'editorial-system.jpg',
  'featured-bg.jpg',
  'gifthub.jpg',
  'luxury-ecommerce.jpg',
  'motion-campaign.jpg',
  'oxygen-gym.jpg',
  'saas-dashboard.jpg',
  'smart-summarize.jpg',
  'unifi-dapp.jpg',
  'placeholder-logo.svg',
  'placeholder.svg',
  'resume.pdf'
];

function walkSync(dir, filelist = []) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const filepath = path.join(dir, file);
      if (fs.statSync(filepath).isDirectory()) {
        filelist = walkSync(filepath, filelist);
      } else {
        if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.css') || filepath.endsWith('.json')) {
            filelist.push(filepath);
        }
      }
    });
  }
  return filelist;
}

const files = [
  ...walkSync('app'),
  ...walkSync('components'),
  ...walkSync('data'),
  ...walkSync('lib'),
  ...walkSync('styles')
];

let unused = new Set(assets);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const asset of unused) {
    if (content.includes(asset)) {
      unused.delete(asset);
    }
  }
}

console.log("Unused assets:", Array.from(unused));
