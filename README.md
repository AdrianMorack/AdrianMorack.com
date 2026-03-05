# AdrianMorack.com: Personal Portfolio Website

A full-stack personal portfolio built with React and Node.js/Express. Features internationalization (English & German), a working contact form, and a responsive design for both desktop and mobile.

**Live Site:** [adrianmorack.com](https://adrianmorack.com)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [What I Learned](#what-i-learned)
- [Contact](#contact)

---

## Features

- **Multi-page SPA:** Home, Skills, Projects, and Contact pages with client-side routing via React Router
- **Bilingual support:** Full English and German translations powered by `i18next`
- **Contact form:** Submissions are handled by the Express backend and delivered via the [Resend](https://resend.com) email API
- **Responsive design:** Layout adapts gracefully for mobile and desktop viewports
- **Projects showcase:** Blog-style card layout displaying projects with tags, descriptions, and links

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM 7 | Client-side routing (HashRouter for static hosting) |
| react-i18next / i18next | English ↔ German internationalization |
| react-icons | Icon library (GitHub, LinkedIn, etc.) |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| TypeScript | Static typing for the entire backend |
| Resend | Transactional email delivery for the contact form |
| dotenv | Environment variable management |
| cors | Cross-origin request handling |

---

## Project Structure

```
AdrianMorack.com/
├── package.json          # Root scripts (runs frontend + backend concurrently)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js        # Root component with nav and routing
│   │   ├── i18n.js       # i18next configuration and all translations
│   │   └── pages/
│   │       ├── Home.js
│   │       ├── Skills.js
│   │       ├── Projects.js
│   │       └── Contact.js
│   └── package.json
└── backend/
    ├── src/
    │   ├── server.ts     # Express server entry point
    │   ├── contact.ts    # Contact form route + Resend integration
    │   └── routes/
    │       └── api.ts
    └── package.json
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/AdrianMorack/AdrianMorack.com.git
cd AdrianMorack.com
```

### 2. Install all dependencies

```bash
npm run install-all
```

This installs dependencies for both the frontend and backend.

### 3. Set up environment variables

Create a `.env` file inside the `backend/` directory (see [Environment Variables](#environment-variables)).

### 4. Run in development mode

```bash
npm run dev
```

This starts both servers concurrently:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5001](http://localhost:5001)

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start frontend + backend in development mode |
| `npm run build` | Build the React frontend for production |
| `npm run install-all` | Install dependencies for both frontend and backend |

---

## Environment Variables

Create a `backend/.env` file with the following:

```env
RESENDAPIKEY=your_resend_api_key_here
PORT=5001
```

| Variable | Description |
|---|---|
| `RESENDAPIKEY` | API key from [resend.com](https://resend.com), used to send contact form emails |
| `PORT` | Port for the Express server (defaults to `5001` if not set) |

---

## Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com). The `vercel.json` rewrite rule routes all paths to `index.html` so React Router handles navigation correctly.
- **Backend** runs as a separate service. The Express server also serves the compiled React build as a static fallback.

---

## What I Learned

Building this site from scratch was a great end-to-end learning experience. Here are the main things I took away:

### Full-Stack Architecture
Wiring a React frontend to an Express backend taught me how the two sides of a web app actually communicate. I got hands-on experience with CORS configuration, JSON request/response cycles, and structuring a REST API cleanly.

### TypeScript on the Backend
I chose TypeScript for the entire backend rather than plain JavaScript. It forced me to think about types up-front, especially for request/response objects in Express, and caught a lot of potential bugs before they ever ran.

### Internationalization (i18n)
Adding English and German support with `react-i18next` was more involved than I expected. I learned how to structure translation files, wire the language toggle into component state, and ensure every piece of UI text ran through the translation function.

### Email Integration
Instead of setting up a full mail server, I used the Resend API. This taught me about transactional email services, environment-based secret management (never committing API keys), and validating form input on the backend before sending.

### Responsive Design Without a UI Framework
I built the entire UI with plain inline styles and no component library. This was intentional; I wanted to understand CSS fundamentals (flexbox, media query breakpoints via JavaScript resize listeners) rather than relying on abstractions like Tailwind or MUI.

### Deployment & Routing Edge Cases
Deploying a single-page app comes with quirks. I ran into the classic issue where refreshing a route like `/projects` returns a 404 on a static host. The fix was configuring a catch-all rewrite in `vercel.json` to always serve `index.html`, and switching React Router to `HashRouter` for maximum compatibility.

### Git & Project Organization
Keeping a clean commit history and organizing the project as a monorepo (frontend + backend in one repo with root-level scripts) made development smoother and gave me practice with real-world project structure.

---

## Contact

- **Website:** [adrianmorack.com](https://adrianmorack.com)
- **GitHub:** [@AdrianMorack](https://github.com/AdrianMorack)
- **LinkedIn:** [Adrian Morack](https://www.linkedin.com/in/adrian-morack-10501a1a9/)
- **Email:** acmorack@gmail.com
