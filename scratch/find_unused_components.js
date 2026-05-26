const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const filepath = path.join(dir, file);
      if (fs.statSync(filepath).isDirectory()) {
        filelist = walkSync(filepath, filelist);
      } else {
        if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
            filelist.push(filepath);
        }
      }
    });
  }
  return filelist;
}

const components = walkSync('components');
const filesToSearch = [...walkSync('app'), ...components, ...walkSync('lib'), ...walkSync('data')];

let unusedComponents = new Set(components);

// exclude ui components that might be used dynamically or layout components like ScrollProgress
// actually, let's just do a naive grep search for the basename without extension.

for (const file of filesToSearch) {
  const content = fs.readFileSync(file, 'utf8');
  for (const comp of Array.from(unusedComponents)) {
    if (file === comp) continue;
    const basename = path.basename(comp, path.extname(comp));
    if (content.includes(`/${basename}`) || content.includes(`from "${basename}"`) || content.includes(`<${basename}`) || content.includes(basename)) {
      unusedComponents.delete(comp);
    }
  }
}

console.log("Potentially unused components:", Array.from(unusedComponents));
