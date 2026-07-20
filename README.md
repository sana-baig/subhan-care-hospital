# Subhan Care Hospital — Hospital Management System

React 19 + Vite 8 frontend prototype, styled with Tailwind CSS 4, built per the
project's Hospital Management System documentation.

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (typically http://localhost:5173).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build into `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Notes

- Login accepts any non-empty username/password (no backend yet).
- Admin role has the full dashboard (stats + searchable schedule table).
- Doctor / Patient / Receptionist show a placeholder operations module,
  ready for future feature work.
