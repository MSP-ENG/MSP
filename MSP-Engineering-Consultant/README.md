# MSP Engineering Consultant — Website

> Official digital presence for **MSP Engineering Consultant** — a leading Pharmaceutical & Biotech Engineering, Procurement, and Construction Management (EPCM) consultancy.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM v6 |
| Database (optional) | Supabase (PostgreSQL + RLS) |
| Icons | Lucide React |
| Fonts | Work Sans + Inter (Google Fonts) |

---

## 📁 Project Structure

```
msp-engineering-website/
├── public/
│   ├── logo.svg              # Company logo (SVG)
│   └── team/                 # Leadership team photos
│       ├── madhup-singh.jpeg
│       ├── sanjeev-kolhe.jpeg
│       ├── avinash-tayde.jpeg
│       ├── devendra-navale.jpeg
│       └── anurag-songer.jpeg
├── src/
│   ├── assets/               # Static image assets
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Hero, CTASection, etc.
│   │   └── ui/               # Button, Breadcrumb, Logo
│   ├── data/
│   │   └── seedData.js       # Fallback fixture data (no DB needed)
│   ├── hooks/
│   │   └── useTestimonials.js # useTeam(), useTestimonials()
│   ├── lib/
│   │   └── supabaseClient.js  # Supabase client + dataService
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── services/
│   │       ├── ServicesOverview.jsx
│   │       ├── EngineeringDesign.jsx
│   │       ├── ValidationDocumentation.jsx
│   │       ├── Consultancy.jsx
│   │       ├── ProjectExecution.jsx
│   │       └── Procurement.jsx
│   ├── App.jsx
│   ├── index.css             # Design tokens + global styles
│   └── main.jsx
├── supabase/
│   └── migrations/
│       └── 20260815_init_schema.sql  # Full DB schema + seed data
├── .env.example              # Environment variable template
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) **v18 or higher**
- [npm](https://www.npmjs.com/) v9+ (comes with Node.js)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_ORG/msp-engineering-website.git
cd msp-engineering-website
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Copy the example env file and fill in your values:

```bash
copy .env.example .env.local
```

Open `.env.local` and set:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

> **Note:** If you skip this step, the website will still work perfectly using the **built-in fixture/seed data** (`src/data/seedData.js`). Supabase is optional.

---

### 4. Run the Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

---

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

---

### 6. Preview Production Build Locally

```bash
npm run preview
```

---

## 🗄️ Database Setup (Optional — Supabase)

If you want to connect a live Supabase database:

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** in your Supabase dashboard
3. Copy and paste the entire contents of `supabase/migrations/20260815_init_schema.sql`
4. Run the SQL — it will create all tables, RLS policies, and seed data
5. Copy your **Project URL** and **Anon Key** from `Settings → API` into `.env.local`

### Tables Created

| Table | Description |
|---|---|
| `services` | Engineering service categories and sub-services |
| `projects` | Case study projects with sector, scope, and outcomes |
| `team_members` | Leadership key persons with bios and photos |
| `testimonials` | Client testimonials and quotes |
| `enquiries` | Contact form submissions |

---

## 🖼️ Updating Leadership Photos

Place team member photos in:

```
public/team/
```

Use these exact filenames:

| Person | File Name |
|---|---|
| Mr. Madhup Singh | `madhup-singh.jpeg` |
| Dr. Sanjeev N. Kolhe | `sanjeev-kolhe.jpeg` |
| Mr. Avinash Tayde | `avinash-tayde.jpeg` |
| Mr. Devendra Navale | `devendra-navale.jpeg` |
| Mr. Anurag Songer | `anurag-songer.jpeg` |

Recommended: **portrait orientation, 600×700 px, JPG or PNG**

---

## 🌐 Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us (Vision, Mission, Leadership, Clients) |
| `/services` | Services Overview |
| `/services/engineering-design` | Engineering & Design |
| `/services/validation-documentation` | Validation & Documentation |
| `/services/consultancy` | Consultancy |
| `/services/project-execution` | Project Execution (EPCM) |
| `/services/procurement` | Procurement |
| `/projects` | Projects & Clients |
| `/projects/:slug` | Project Detail |
| `/contact` | Contact Us |

---

## 🎨 Design System

The design uses the **Industrial Precision** design language:

| Token | Value |
|---|---|
| Primary (Navy Blue) | `#002a3c` |
| Secondary (Amber) | `#feae2c` |
| Background | `#f6faff` |
| Headline Font | Work Sans |
| Body Font | Inter |

All tokens are defined in `tailwind.config.js` and `src/index.css`.

---

## 📦 Deployment

The `dist/` folder can be deployed to any static host:

- **Vercel** — Connect GitHub repo, Vercel auto-detects Vite
- **Netlify** — Drag and drop the `dist/` folder, or connect via Git
- **GitHub Pages** — Use `vite-plugin-gh-pages`
- **Hostinger / cPanel** — Upload `dist/` contents via File Manager

---

## 📄 License

This project is proprietary and confidential.
© 2024–2025 MSP Engineering Consultant. All rights reserved.
