const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const deps = Object.keys(pkg.dependencies);

function walkSync(dir, filelist = []) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const filepath = path.join(dir, file);
      if (fs.statSync(filepath).isDirectory()) {
        filelist = walkSync(filepath, filelist);
      } else {
        if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.js') || filepath.endsWith('.mjs')) {
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
  ...walkSync('lib')
];

let unused = new Set(deps);

// Known false positives (types, configs, next-related, etc.)
const ignore = new Set([
  'next', 'react', 'react-dom', 'tailwindcss-animate', 'tailwind-merge', 'autoprefixer'
]);
for (const i of ignore) unused.delete(i);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const dep of Array.from(unused)) {
    // Check for 'dep' or "dep" in import/require statements
    if (content.includes(`'${dep}'`) || content.includes(`"${dep}"`) || content.includes(`'${dep}/`) || content.includes(`"${dep}/`)) {
      unused.delete(dep);
    }
  }
}

console.log("Unused dependencies:", Array.from(unused));
