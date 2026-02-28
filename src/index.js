#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

console.log('QuickPoll CLI v1.0.0\n');

if (command === 'create') {
  const question = args.slice(1).join(' ');
  
  if (!question) {
    console.log('❌ Error: Please provide a question');
    console.log('Usage: quickpoll create "Your question here"');
  } else {
    console.log('✅ Creating poll:');
    console.log(`   Question: ${question}`);
    console.log('\n(Poll storage coming next!)');
  }
} else if (command === 'help') {
  console.log('Available commands:');
  console.log('  quickpoll create "question"  - Create a new poll');
  console.log('  quickpoll help               - Show this help message');
} else {
  console.log('Type "quickpoll help" to see available commands');
}
