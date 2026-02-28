#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

console.log('QuickPoll CLI v1.0.0\n');

if (command === 'create') {
  console.log('Creating a new poll...');
  console.log('(Feature coming in next milestone!)');
} else if (command === 'help') {
  console.log('Available commands:');
  console.log('  quickpoll create  - Create a new poll');
  console.log('  quickpoll help    - Show this help message');
} else {
  console.log('Type "quickpoll help" to see available commands');
}
