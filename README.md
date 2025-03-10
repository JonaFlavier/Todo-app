# Todo App

## 1. Introduction
The Todo App is a simple task management application that allows users to create, view, update, and delete tasks. Users can log in using their existing accounts via **Auth0** (Google, Facebook, GitHub, LinkedIn, etc.). This app uses **FastAPI** for the backend, **PostgreSQL** as the database, and **Next.js** for the frontend.

---
## 2. Current progress
  
- **Todo Management**:
  - Users can view their todo list.
    - currently hardcoded
  - Users can update (edit or mark as complete) tasks.
modal completed, logic needs to be implemented properly
    - progress bar tracks how many tasks have been marked as complete
  - Users can create new todos.
    - modal completed, logic needs to be implemented properly
 
      
<div style="display: flex; justify-content: space-between; gap: 10px;">
<img src="https://github.com/user-attachments/assets/b360ffc9-4caa-4184-8e19-10d5e2774153" alt="Progress Bar" width="200" height="auto" />
<img src="https://github.com/user-attachments/assets/73ee889a-11e3-4d1d-9938-7b382fdce73d" alt="Edit/Complete Tasks" width="200" height="auto" />
<img src="https://github.com/user-attachments/assets/bbf16667-9374-4ed9-b906-4a16b5a65855" alt="Todo List" width="200" height="auto" />
<img src="https://github.com/user-attachments/assets/4a70f0b7-07ac-4322-bdbd-34678748dd7b" alt="Create Todo" width="200" height="auto" />
</div>

---

## 3. Features
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

## 4. Tech Stack
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

