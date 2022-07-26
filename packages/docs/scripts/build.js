const mv = require('mv');
const touch = require('touch');

function move() {
  return new Promise((resolve, reject) => {
    mv('out', '../../docs', { mkdirp: true }, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}

async function createNoJekyll() {
  return touch('../../docs/.nojekyll');
}

async function run() {
  await move();
  await createNoJekyll();
}

run();
