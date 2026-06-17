# Portfolio Platform

A modern full-stack portfolio platform built to showcase personal information, skills, projects, experience, and professional achievements.

This project is designed as a developer portfolio system where the frontend displays portfolio content and the backend manages dynamic data, authentication, image uploads, and content management.

---

## Live Demo

```txt
https://portfolio-platform-steel.vercel.app
```

---

## Features

- Modern responsive portfolio UI
- Project showcase section
- Skills and technology section
- About me section
- Contact section
- Backend API support
- Authentication support
- Cloudinary image upload support
- Theme and UI enhancement support
- Clean full-stack folder structure

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons
- Axios
- React Hot Toast
- Next Themes

### Backend
- NestJS
- TypeScript
- Prisma
- JWT Authentication
- Passport JWT
- bcrypt
- Cloudinary
- Multer

---

## Project Structure

```bash
portfolio-platform/
│
├── backend/        # NestJS backend API
├── frontend/       # Next.js frontend application
├── README.md
└── .gitignore
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/iamskyline49/portfolio-platform.git
cd portfolio-platform
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"

CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

Run Prisma migration:

```bash
npx prisma migrate dev
```

Run the backend:

```bash
npm run start:dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file inside the `frontend` folder:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

Open the project:

```bash
http://localhost:3000
```

---

## Available Scripts

### Backend

```bash
npm run start
npm run start:dev
npm run build
npm run test
npm run lint
```

### Frontend

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## Future Improvements

- Add admin dashboard
- Add blog section
- Add project filtering
- Add resume download feature
- Add contact form email integration
- Improve SEO and metadata
- Add unit and e2e tests

---

## Author

**Prottoy Sarker Diganto**  
GitHub: [iamskyline49](https://github.com/iamskyline49)

---

## License

This project is for personal portfolio and professional showcase purposes.
