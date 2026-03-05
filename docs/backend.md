# Backend Documentation

## Overview

The backend is a **Node.js/Express** server written in **TypeScript**. It serves two purposes:

1. Exposes a REST API consumed by the React frontend.
2. Serves the compiled React build as static files in production.

All source files live in `backend/src/`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express 5 |
| Language | TypeScript 5 |
| Email | Resend API |
| Dev server | ts-node + nodemon |
| Build | tsc → `dist/` |

---

## Project Structure

```
backend/
├── src/
│   ├── server.ts          # Entry point — Express app setup
│   ├── contact.ts         # Contact form route handler
│   └── routes/
│       └── api.ts         # General API routes
├── dist/                  # Compiled output (git-ignored)
├── package.json
└── tsconfig.json
```

---

## Configuration

### Environment Variables

Create a `.env` file in `backend/` before running the server:

```env
PORT=5001
RESENDAPIKEY=your_resend_api_key_here
```

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | HTTP port (defaults to `5001`) |
| `RESENDAPIKEY` | Yes | API key from [resend.com](https://resend.com) used to send contact form emails |

### TypeScript (`tsconfig.json`)

- **Target:** ES2020
- **Module:** CommonJS
- **Output:** `./dist`
- **Root:** `./src`
- Strict mode enabled

---

## Running the Server

```bash
# Install dependencies
npm install

# Development (hot-reload via nodemon)
npm run dev

# Production build
npm run build
npm start
```

---

## Middleware

| Middleware | Purpose |
|---|---|
| `cors` | Allows requests from `localhost:3000`, `adrianmorack.com`, and `www.adrianmorack.com` |
| `express.json()` | Parses JSON request bodies |
| `express.urlencoded()` | Parses URL-encoded form data |
| `express.static()` | Serves the React build from `frontend/build/` |

---

## API Endpoints

### Contact Form

**`POST /api/contact`**

Processes a contact form submission and sends an email to the site owner via Resend.

**Request body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello!"
}
```

**Responses:**

| Status | Description |
|---|---|
| `200` | Email sent successfully |
| `400` | Missing required fields (`name`, `email`, or `message`) |
| `500` | Internal server error / Resend failure |

The email is sent from `mywebsite@resend.dev`, delivered to `acmorack@gmail.com`, with `Reply-To` set to the submitter's email address.

---

### Users (Mock)

These endpoints are placeholders for a future user system and return mock data.

**`GET /api/users`** — Returns a hardcoded list of users.

**`POST /api/users`** — Echoes back the request body with a `201` status.

> These endpoints are not consumed by the frontend and will be replaced with real database queries when a user system is implemented.

---

## Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `express` | ^5.2.1 | HTTP server framework |
| `cors` | ^2.8.6 | Cross-origin resource sharing |
| `dotenv` | ^17.2.3 | Environment variable loading |
| `resend` | ^6.9.1 | Transactional email API |
| `nodemailer` | ^7.0.13 | Email fallback (future use) |

### Development

| Package | Version | Purpose |
|---|---|---|
| `typescript` | ^5.9.3 | TypeScript compiler |
| `ts-node` | ^10.9.2 | Run TypeScript directly |
| `nodemon` | ^3.1.11 | Auto-restart on file changes |
| `@types/express` | ^5.0.6 | Express type definitions |
| `@types/node` | ^25.1.0 | Node.js type definitions |
