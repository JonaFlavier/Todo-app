# Todo App

## 1. Introduction
The Todo App is a simple task management application that allows users to create, view, update, and delete tasks. Users can log in using their existing accounts via **Auth0** (Google, Facebook, GitHub, LinkedIn, etc.). This app uses **FastAPI** for the backend, **PostgreSQL** as the database, and **Next.js** for the frontend.

---

## 2. Features
- **User Authentication**:
  - Users can log in using **Google**, **Facebook**, **GitHub**, **LinkedIn**, and other available identity providers via **Auth0**.
  - Secure OAuth 2.0 and JWT-based authentication.
  
- **Todo Management**:
  - Users can create new todos.
  - Users can view their todo list.
  - Users can update (edit or mark as complete) tasks.
  - Users can delete tasks.

- **CRUD Operations**:
  - **Create**: Add new tasks with a title, description, and due date.
  - **Read**: View all tasks associated with the logged-in user.
  - **Update**: Edit existing tasks or mark them as complete.
  - **Delete**: Remove tasks from the list.

---

## 3. Tech Stack
- **Frontend**: 
  - **Next.js** (React-based framework for server-side rendering and static site generation)
  - **Axios** or **Fetch API** (for making API requests to the backend)
  
- **Backend**:
  - **FastAPI** (for creating RESTful API endpoints)
  - **SQLAlchemy** (for interacting with the PostgreSQL database)
  - **PostgreSQL** (for storing user data and todos)

- **Authentication**: 
  - **Auth0** (for handling authentication and social logins, such as Google, Facebook, GitHub, LinkedIn)
  - **OAuth 2.0** and **JWT (JSON Web Token)** for secure access tokens.

- **Testing**:
  - **pytest** (for backend unit testing)
  - **Jest** (for frontend testing)
  - **Postman** or **Insomnia** (for API testing)

---
