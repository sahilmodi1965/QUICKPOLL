# QuickPoll

Real-time anonymous polling via CLI for quick team decisions.

## Problem

Remote teams need fast, anonymous polls for decisions. Slack polls are clunky, not anonymous, and require context-switching. QuickPoll solves this by bringing polls directly to the terminal.

## Target Users

- Small dev teams making technical decisions
- Remote workers coordinating schedules
- Anyone who needs quick group feedback without opening a browser

## Tech Stack

- **Node.js** - CLI and server runtime
- **Express** - HTTP server for poll endpoints
- **SQLite** - Lightweight database for polls and votes
- **Railway** - Deployment platform

## How It Works (Planned)

1. User runs `quickpoll create "Pizza or burgers?"`
2. CLI generates a shareable link
3. Others visit the link and vote
4. Results stream back to the creator's terminal in real-time

## Current Status

🚧 Milestone 0: Project setup complete. Building starts next!

---

Built as part of the StepAhead mentorship program.
