# Zocket Fullstack Task Management System

## Overview
Zocket is an AI-powered task management system that enables efficient task creation, assignment, and tracking with real-time updates and AI-driven suggestions. The application is built with a modern tech stack and deployed on cloud platforms for seamless performance.

## Features
- **User Authentication**: JWT-based authentication for secure user access.
- **Task Management**: Users can create, assign, and track tasks effortlessly.
- **AI-Powered Task Suggestions**: Uses OpenAI/Gemini API to suggest and optimize task assignments.
- **Real-time Updates**: WebSockets enable instant updates on task status changes.
- **Cloud Deployment**: Hosted on Vercel for frontend and backend scalability.

## Tech Stack
### Backend (Golang - Gin/Fiber)
- **Framework**: Gin/Fiber for building RESTful APIs.
- **Authentication**: JWT-based authentication for secure access.
- **Database**: PostgreSQL/MongoDB for storing user and task data.
- **AI Integration**: OpenAI/Gemini API for intelligent task suggestions.
- **Real-time Communication**: WebSockets for instant task updates.
- **Deployment**: Hosted on Render/Fly.io for backend services.

### Frontend (Next.js + Tailwind CSS)
- **Framework**: Next.js for server-side rendering and API handling.
- **UI Styling**: Tailwind CSS for a responsive and modern UI.
- **State Management**: React hooks and context for efficient data handling.
- **Authentication**: `next-auth` for seamless user authentication.
- **Real-time Updates**: WebSocket client for live task tracking.
- **Deployment**: Hosted on Vercel for high-performance frontend delivery.

## Project Structure
```
/                     # Root directory
├── app/              # Core application logic
├── backend/          # NEW: Backend (Golang API)
│   ├── main.go       # Entry point for the backend server
│   ├── routes/       # API route handlers
│   ├── models/       # Database models
│   ├── controllers/  # Business logic for requests
│   ├── database/     # DB connection setup
│   ├── middleware/   # Authentication & validation middleware
│   ├── services/     # AI integration & business logic
│   ├── websocket/    # Real-time updates using WebSockets
│   ├── go.mod        # Go module dependencies
│   ├── go.sum        # Dependency checksums
├── components/       
├── hooks/            
├── lib/              
├── node_modules/     
├── out/              
├── public/           
├── styles/           
├── pages/            
├── next.config.js    
├── tailwind.config.ts
├── package.json      
├── tsconfig.json     
├── .env.example      

```

## Setup & Installation
### Backend
1. Clone the repository:
   ```sh
   git clone https://github.com/Anushkajoshii/zocket-fullstack.git
   cd backend
   ```
2. Install dependencies:
   ```sh
   go mod tidy
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
4. Run the server:
   ```sh
   go run main.go
   ```

### Frontend
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```

## Deployment
- **Frontend**: Deployed on Vercel ([Live Demo](https://zocket-fullstack.vercel.app)).
- **Backend**: Hosted on Render/Fly.io (Add backend URL if applicable).

## How AI Tools Helped
- **Task Suggestions**: AI models (OpenAI/Gemini API) analyze user input to provide optimized task breakdowns.
- **Automated Categorization**: AI classifies tasks based on priority, dependencies, and user workload.
- **Chat Assistance**: AI-powered chatbot assists users in managing tasks via natural language commands.

## Future Enhancements
- **Slack/Discord Bot**: AI-driven task automation via Slack/Discord integration.
- **Kubernetes/Docker**: Improved scalability with containerized deployment.
- **Advanced Analytics**: AI-generated insights for productivity tracking.

---
This documentation serves as a guide to understanding, setting up, and contributing to the Zocket Fullstack Task Management System. Feel free to contribute and enhance the project!

