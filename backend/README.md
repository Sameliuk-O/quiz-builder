# Quiz Builder Backend

Backend API for Quiz Builder application, built with NestJS using PostgreSQL and Prisma ORM.

## 📋 Description

This is the server-side part of the application for creating and managing quizzes. The API provides the ability to create quizzes with different types of questions (yes/no, text input, multiple choice) and manage them.

## 🛠 Technologies

- **NestJS** v11.0.1 - progressive Node.js framework
- **TypeScript** v5.7.3 - typed superset of JavaScript
- **Prisma** v6.17.1 - modern ORM for database operations
- **PostgreSQL** - relational database
- **TypeORM** v0.3.27 - additional ORM
- **Class Validator** - data validation
- **Class Transformer** - object transformation

## 📦 Installation

1. Clone the repository and navigate to the backend directory:
```bash
cd backend
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

5. Generate Prisma Client:
```bash
npx prisma generate
```

6. Run database migrations:
```bash
npx prisma migrate dev
```

## 🚀 Running

### Development mode
```bash
npm run start:dev
```

### Production mode
```bash
npm run build
npm run start:prod
```

### Debug mode
```bash
npm run start:debug
```

The server will be available at: `http://localhost:3001` (or the port specified in `.env`)

## 📊 Database

### Model Structure

#### Quiz
- `id` - unique identifier
- `title` - quiz title
- `questions` - list of questions
- `createdAt` - creation date

#### Question
- `id` - unique identifier
- `text` - question text
- `type` - question type (BOOLEAN, INPUT, CHECKBOX)
- `quizId` - quiz identifier
- `options` - answer options

#### Option
- `id` - unique identifier
- `text` - option text
- `isCorrect` - whether the answer is correct
- `questionId` - question identifier

### Working with Prisma

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Open Prisma Studio (GUI for viewing data)
npx prisma studio

# Update schema without migration
npx prisma db push

# Reset database
npx prisma migrate reset
```

## 📝 Scripts

- `npm run build` - build the project
- `npm run format` - format code using Prettier
- `npm run lint` - check code using ESLint
- `npm run lint:fix` - automatically fix ESLint errors

## 🏗 Project Structure

```
backend/
├── prisma/
│   └── schema.prisma      # Prisma database schema
├── src/
│   ├── quizzes/          # Quizzes module
│   ├── prisma/           # Prisma service
│   ├── app.module.ts     # Main application module
│   ├── app.controller.ts # Main controller
│   ├── app.service.ts    # Main service
│   └── main.ts           # Entry point
├── .env.example          # Environment variables example
└── package.json          # Dependencies and scripts
```

## 🔧 Configuration

The project uses `@nestjs/config` for configuration management. All environment variables are loaded from the `.env` file.

## 📚 API Documentation

API endpoints will be available after starting the server. Main routes:

- `GET /` - API health check
- `/quizzes` - CRUD operations for quizzes

## 📄 License

UNLICENSED
