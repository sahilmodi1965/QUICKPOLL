#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

function generatePollId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

console.log('QuickPoll CLI v1.0.0\n');

if (command === 'create') {
  const question = args.slice(1).join(' ');
  
  if (!question) {
    console.log('❌ Error: Please provide a question');
    console.log('Usage: quickpoll create "Your question here"');
  } else {
    const pollId = generatePollId();
    console.log('✅ Poll created successfully!\n');
    console.log(`   ID: ${pollId}`);
    console.log(`   Question: ${question}`);
    console.log('\n(Storage coming next — for now this ID is just generated)');
  }
} else if (command === 'help') {
  console.log('Available commands:');
  console.log('  quickpoll create "question"  - Create a new poll');
  console.log('  quickpoll help               - Show this help message');
} else {
  console.log('Type "quickpoll help" to see available commands');
}
