# AI_CONTEXT.md

## Project Name
Financios – Spaar Scan

## Goal
Help Gen Z users understand why they are not saving money and give them a simple, actionable savings plan in under 60 seconds.

## Target Users
- Students (Gen Z)
- Young people struggling with money
- First-time budgeters

## Core Features (MVP)
- Input financial data
- Calculate savings potential
- Show biggest expense category
- Generate a simple savings plan
- Optional AI-generated advice

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- shadcn/ui
- Vercel (deployment)

## Architecture Rules
- Keep everything extremely simple
- No overengineering
- Deterministic calculations ONLY
- AI used only for advice text

## UI Guidelines
- Dark mode default
- Minimal, modern SaaS style
- Card-based layout
- Mobile-first

## Tone of Voice
- Simple
- Direct
- Slightly casual (Gen Z)
- No corporate language

## Pages Required
- /
- /scan
- /result
- /privacy
- /terms
- /disclaimer

## Data Flow
- Form → query params → result page
- No database in MVP

## Security
- Validate all inputs
- Sanitize user data

## Legal Requirement
- Must include disclaimer: NOT financial advice

## Anti-Overengineering Rule
Always choose the simplest solution possible.