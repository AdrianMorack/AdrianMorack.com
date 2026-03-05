# Frontend Documentation

## Overview

The frontend is a **React 19** single-page application (SPA) bootstrapped with Create React App. It communicates with the Express backend for the contact form and uses **react-i18next** for English/German localization.

All source files live in `frontend/src/`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Routing | React Router DOM 7 |
| Localization | i18next + react-i18next |
| Icons | react-icons (Font Awesome) |
| Build tool | Create React App (react-scripts 5) |
| Testing | React Testing Library + Jest |

---

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── index.js           # React root — mounts <App />
│   ├── App.js             # Router setup, navbar, layout
│   ├── App.css            # Global styles and theme variables
│   ├── index.css          # Body/reset styles
│   ├── i18n.js            # i18next configuration and translations
│   └── pages/
│       ├── Home.js        # Landing page with social links
│       ├── Projects.js    # Blog-style project showcase
│       ├── Skills.js      # Skill categories and details
│       └── Contact.js     # Contact form
├── build/                 # Production build output (git-ignored)
└── package.json
```

---

## Running the App

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## Pages

### Home (`/`)

Landing page centered vertically and horizontally. Displays a welcome heading, subtitle, and two social buttons — GitHub and LinkedIn — that open in a new tab.

### Projects (`/projects`)

Blog-style project showcase. Projects are defined in a static `projects` array at the top of the file. Each entry renders as a card with:
- Date and title
- Technology tag pills
- Summary paragraph
- Source (GitHub) and Live Demo link buttons

To add a project, append an object to the `projects` array in [pages/Projects.js](../frontend/src/pages/Projects.js):

```js
{
  title: 'Project Name',
  date: 'Month Year',
  tags: ['Tech1', 'Tech2'],
  summary: 'Short description.',
  github: 'https://github.com/...',
  demo: 'https://...', // or null
}
```

### Skills (`/skills`)

Displays a categorized list of technical and soft skills with expandable detail sections. Categories include:
- Professional Experience
- Software Development & Engineering
- Data & AI
- Systems & Infrastructure
- Security & Best Practices
- Soft Skills

### Contact (`/contact`)

Form with `name`, `email`, and `message` fields. On submit, it `POST`s to `/api/contact` on the backend. Shows inline success or error feedback without a page reload.

---

## Localization (i18n)

The app supports **English** and **German**. Language configuration lives in `src/i18n.js`.

- Translations are stored as nested keys under `en.translation` and `de.translation`.
- The active language is toggled via a button in the navbar, which calls `i18n.changeLanguage()`.
- Any component accesses translations via the `useTranslation()` hook:

```js
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
// ...
<h1>{t('home.welcome')}</h1>
```

**To add a new translation key:**
1. Add the key/value pair under both `en.translation` and `de.translation` in `i18n.js`.
2. Reference it with `t('your.key')` in the component.

---

## Responsive Design

All pages detect the viewport width using a `useState`/`useEffect` pattern and apply different styles for mobile (`<= 768px`) and desktop. There is no external CSS framework — all styles are inline.

```js
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Yellow | `#FED766` | Page titles, primary CTAs |
| Teal | `#009FB7` | Subtitles, links, tag pills, accents |
| Light | `#EFF1F3` | Body text |
| Dark 1 | `#272932` | Container backgrounds |
| Dark 2 | `#1a1a24` | Page/body background |
| Charcoal | `#272727` | Button text on light backgrounds |

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.2.4 | UI library |
| `react-dom` | ^19.2.4 | DOM rendering |
| `react-router-dom` | ^7.13.0 | Client-side routing |
| `i18next` | ^23.11.5 | Internationalization core |
| `react-i18next` | ^14.1.2 | React bindings for i18next |
| `web-vitals` | ^2.1.4 | Performance metrics |
