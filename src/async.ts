import { promisify } from 'util';

const asyncTimeout = promisify(setTimeout);

async function run() {
  console.log('bar');

  await asyncTimeout(1000);

  console.log('foo');
}

void run();

console.log('baz');

// When executed will output in the following order:
//  - bar
//  - baz
//  - foo

// Reason: Executes synchronous code first then asynchronous
