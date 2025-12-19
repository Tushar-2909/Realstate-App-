# Realstate App

A modern, full-featured real estate management application built with React, TypeScript, and Supabase.

**Developed by:** Tushar

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Admin Panel](#admin-panel)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **Property Listings Management** - Create, read, update, and delete real estate projects
- **Client Management** - Maintain a comprehensive client database
- **Contact Inquiries** - Track and manage contact form submissions
- **Subscriber Management** - Manage email subscribers and communications
- **Admin Dashboard** - Real-time statistics and analytics
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Dark Mode Support** - Theme switching capability
- **Real-time Database** - Supabase integration for live data synchronization
- **Search & Filter** - Advanced search functionality across all modules

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **React Router DOM** - Client-side routing
- **React Hook Form** - Efficient form handling
- **React Query (TanStack Query)** - Data fetching & caching

### Backend & Database
- **Supabase** - PostgreSQL database with real-time capabilities
- **Supabase Auth** - Authentication & authorization

### UI Components & Utilities
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Recharts** - Data visualization
- **Radix UI** - Headless UI components
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Bun** - Package manager

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Install Node.js](https://nodejs.org/)
- **npm** or **Bun** - Package manager
- **Git** - Version control

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Tushar-2909/Realstate-App-.git
cd assessment-buddy-main
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun:
```bash
bun install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

Get these values from your [Supabase Dashboard](https://supabase.com/dashboard)

---

## 🎯 Getting Started

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── admin/           # Admin layout components
│   ├── landing/         # Landing page sections
│   └── ui/              # Reusable UI components
├── pages/
│   ├── admin/           # Admin panel pages
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminProjects.tsx
│   │   ├── AdminClients.tsx
│   │   ├── AdminContacts.tsx
│   │   └── AdminSubscribers.tsx
│   ├── Index.tsx        # Home page
│   └── NotFound.tsx     # 404 page
├── integrations/
│   └── supabase/        # Supabase client & types
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component
└── main.tsx             # Application entry point
```

---

## 🔐 Admin Panel

Access the admin panel at `/admin` after starting the development server.

### Admin Features

- **Dashboard** - Overview of all statistics
- **Projects** - Manage property listings
- **Clients** - Manage client information
- **Contacts** - View contact inquiries
- **Subscribers** - Manage email subscribers

### Update Data from Database

The admin panel automatically syncs with the Supabase database:

1. Edit any item by clicking the edit icon
2. Make your changes
3. Click "Update" to save to the database
4. Dashboard statistics refresh automatically every 5 seconds

---

## 🔧 Environment Setup

### Supabase Setup

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Create the following tables:
   - `projects` - Property listings
   - `clients` - Client information
   - `contacts` - Contact form submissions
   - `subscribers` - Email subscribers

4. Get your API credentials from **Project Settings > API**
5. Add them to your `.env` file

### Enable RLS (Row Level Security)

For public access, disable RLS on tables or set appropriate policies:

```sql
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable read access for all users" ON projects FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for authenticated users" ON projects FOR UPDATE USING (true);
CREATE POLICY "Enable delete for authenticated users" ON projects FOR DELETE USING (true);
```

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development environment |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 About the Developer

**Tushar** - Full Stack Developer



---

## 🐛 Troubleshooting

### Data Not Fetching from Admin Panel

1. Verify Supabase credentials in `.env`
2. Check browser console (F12) for errors
3. Ensure database tables exist and are properly configured
4. Verify RLS policies allow read access
5. Restart development server after changing `.env`

### Common Issues

- **"relation does not exist"** - Create the required tables in Supabase
- **"permission denied"** - Check RLS policies or disable RLS
- **"undefined URL/KEY"** - Restart dev server after updating `.env`

---

## 📞 Support

For support, please open an issue on GitHub or contact the developer.

---



## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


