# Quiz Builder

A full-stack application for creating and managing quizzes with different types of questions. Built with modern technologies including NestJS, React, TypeScript, and PostgreSQL.

## 📋 Overview

Quiz Builder is a comprehensive web application that allows users to create, manage, and take quizzes. The application supports three types of questions:
- **Boolean** - Yes/No questions
- **Input** - Text input questions
- **Checkbox** - Multiple choice questions

## 🏗 Project Structure

```
quiz-builder/
├── backend/          # NestJS backend API
├── frontend/         # React frontend application
└── README.md         # This file
```

## 🛠 Tech Stack

### Backend
- **NestJS** v11.0.1 - Progressive Node.js framework
- **Prisma** v6.17.1 - Modern ORM
- **PostgreSQL** - Relational database
- **TypeScript** v5.7.3 - Type-safe JavaScript
- **TypeORM** v0.3.27 - Additional ORM support

### Frontend
- **React** v19.1.1 - UI library
- **Vite** v7.1.7 - Build tool and dev server
- **TypeScript** v5.9.3 - Type-safe JavaScript
- **TailwindCSS** v4.1.14 - Utility-first CSS framework
- **React Router DOM** v7.9.4 - Client-side routing
- **React Hook Form** v7.65.0 - Form management
- **Axios** v1.12.2 - HTTP client

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd quiz-builder
```

2. **Set up Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your database credentials
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

The backend will be available at `http://localhost:3001`

3. **Set up Frontend**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env file with backend API URL
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📚 Documentation

For detailed documentation, please refer to:
- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

## 🎯 Features

- ✅ Create and manage quizzes
- ✅ Multiple question types (Boolean, Input, Checkbox)
- ✅ Add multiple options for checkbox questions
- ✅ Mark correct answers
- ✅ Take quizzes and view results
- ✅ Modern and responsive UI
- ✅ Type-safe codebase with TypeScript
- ✅ RESTful API architecture

## 🔧 Development

### Backend Development
```bash
cd backend
npm run start:dev      # Start in development mode
npm run build          # Build for production
npm run lint           # Lint code
npm run format         # Format code
```

### Frontend Development
```bash
cd frontend
npm run dev            # Start dev server
npm run build          # Build for production
npm run preview        # Preview production build
npm run lint           # Lint code
npm run format         # Format code
```

## 📊 Database Schema

### Models

**Quiz**
- id (Int) - Primary key
- title (String) - Quiz title
- questions (Question[]) - Related questions
- createdAt (DateTime) - Creation timestamp

**Question**
- id (Int) - Primary key
- text (String) - Question text
- type (QuestionType) - BOOLEAN | INPUT | CHECKBOX
- quizId (Int) - Foreign key to Quiz
- options (Option[]) - Related options

**Option**
- id (Int) - Primary key
- text (String) - Option text
- isCorrect (Boolean) - Correct answer flag
- questionId (Int) - Foreign key to Question

## 🌐 API Endpoints

### Quizzes
- `GET /` - Health check
- `GET /quizzes` - Get all quizzes
- `GET /quizzes/:id` - Get quiz by ID
- `POST /quizzes` - Create new quiz
- `DELETE /quizzes/:id` - Delete quiz

## 🔒 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/quiz_builder
PORT=3001
```

### Frontend (.env)
```env
VITE_PUBLIC_APP_BASE_API_URL=http://localhost:3001
```

## 🐛 Troubleshooting

### Backend Issues
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Run `npx prisma generate` after schema changes
- Run `npx prisma migrate dev` to apply migrations

### Frontend Issues
- Ensure backend is running
- Check API URL in `.env`
- Clear browser cache
- Delete `node_modules` and reinstall dependencies

## 📄 License

UNLICENSED

