# Quiz Builder Frontend

Frontend application for Quiz Builder, built with React using TypeScript, Vite, and TailwindCSS.

## 📋 Description

This is the client-side part of the application for creating and managing quizzes. The application provides a convenient interface for creating quizzes with different types of questions, editing them, and taking them.

## 🛠 Technologies

- **React** v19.1.1 - library for building user interfaces
- **TypeScript** v5.9.3 - typed superset of JavaScript
- **Vite** v7.1.7 - fast build tool and development server
- **React Router DOM** v7.9.4 - routing for React applications
- **React Hook Form** v7.65.0 - library for working with forms
- **Axios** v1.12.2 - HTTP client for API requests
- **TailwindCSS** v4.1.14 - utility-first CSS framework
- **ESLint** + **Prettier** - tools for maintaining code quality

## 📦 Installation

1. Clone the repository and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file and fill in the required variables:
```env
VITE_PUBLIC_APP_BASE_API_URL=http://localhost:3001
```

## 🚀 Running

### Development mode
```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

### Production build
```bash
npm run build
```

Built files will be in the `dist/` directory

### Preview production build
```bash
npm run preview
```

## 🎨 Styling

The project uses **TailwindCSS** for component styling. Configuration is located in the `tailwind.config.js` file.

### Main principles:
- Utility-first approach
- Responsive design
- Dark theme (if implemented)
- Custom components using Tailwind classes

## 📝 Scripts

- `npm run dev` - start dev server with hot reload
- `npm run build` - build project for production
- `npm run preview` - preview production build
- `npm run lint` - check code using ESLint
- `npm run lint:fix` - automatically fix ESLint errors
- `npm run format` - format code using Prettier

## 🏗 Project Structure

```
frontend/
├── public/
│   └── vite.svg          # Static files
├── src/
│   ├── api/              # API client and requests
│   ├── assets/           # Images, icons, fonts
│   ├── components/       # React components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # TypeScript declarations for Vite
├── .env.example          # Environment variables example
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Configuration

### Vite
Vite configuration is located in the `vite.config.ts` file. Main settings:
- React plugin for JSX/TSX support
- Proxy for API requests (if needed)
- Build optimization

### TypeScript
The project uses strict TypeScript mode to ensure type safety. Configuration in files:
- `tsconfig.json` - main configuration
- `tsconfig.node.json` - configuration for Node.js tools

### ESLint
Linter settings include:
- React hooks rules
- Import sorting
- Prettier integration
- TypeScript rules

## 🌐 API Integration

The application interacts with the backend API through Axios. All API requests are located in the `src/api/` directory.

### Usage example:
```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_APP_BASE_API_URL,
});

// Get all quizzes
export const getQuizzes = () => api.get('/quizzes');

// Create a new quiz
export const createQuiz = (data) => api.post('/quizzes', data);
```


## 🎯 Main Features

- ✅ Creating new quizzes
- ✅ Adding questions of different types (yes/no, text input, multiple choice)
- ✅ Editing existing quizzes
- ✅ Deleting quizzes
- ✅ Taking quizzes
- ✅ Viewing results

## 🔍 Question Types

1. **BOOLEAN** - yes/no questions
2. **INPUT** - text input questions
3. **CHECKBOX** - multiple choice questions

## 🐛 Known Issues

If you encounter problems:
1. Make sure the backend server is running
2. Check the URL correctness in the `.env` file
3. Clear browser cache
4. Delete `node_modules` and run `npm install` again

## 📄 License

UNLICENSED
