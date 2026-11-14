// Runs your checkpoint 2 function against the public test fixtures.
//   node starter/run-fixtures.js easy     (tests starter/validateAccess.js)
//   node starter/run-fixtures.js hard     (tests starter/validateRequests.js)
// Passing these does not guarantee full marks: the organizer also uses hidden tests.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const track = (process.argv[2] || 'easy').toLowerCase();
const fn = track === 'hard' ? 'validateRequests' : 'validateAccess';
const source = fs.readFileSync(path.join(__dirname, fn + '.js'), 'utf8');
const fixtures = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public_fixtures', 'cp2_' + track + '.json'), 'utf8'));

let passed = 0;
for (const f of fixtures) {
  const ctx = vm.createContext({}); // fresh, empty environment per test, like the real sandbox
  let got;
  try {
    vm.runInContext(source, ctx, { timeout: 1000 });
    got = JSON.parse(JSON.stringify(vm.runInContext(fn + '(' + JSON.stringify(f.input) + ')', ctx, { timeout: 1000 })));
  } catch (e) {
    got = 'ERROR: ' + e.message;
  }
  const ok = JSON.stringify(sortKeys(got)) === JSON.stringify(sortKeys(f.expected));
  if (ok) passed++;
  else console.log('FAIL ' + f.id + '\n  input:    ' + JSON.stringify(f.input) + '\n  expected: ' + JSON.stringify(f.expected) + '\n  got:      ' + JSON.stringify(got));
}
console.log(passed + ' / ' + fixtures.length + ' public fixtures passed');

function sortKeys(v) {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === 'object') return Object.keys(v).sort().reduce((o, k) => { o[k] = sortKeys(v[k]); return o; }, {});
  return v;
}
