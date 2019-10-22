setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 1600);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/   '); 
}, 1700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r--   '); 
}, 1800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\   '); 
}, 1900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 2000);
// ... fill in the rest yourself ...