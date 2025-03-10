# Todo App

## 1. Introduction
The Todo App is a simple task management application that allows users to create, view, update, and delete tasks. Users can log in using their existing accounts via **Auth0** (Google, Facebook, GitHub, LinkedIn, etc.). This app uses **FastAPI** for the backend, **PostgreSQL** as the database, and **Next.js** for the frontend.

---
## 2. Current progress
  
- **Todo Management**:
  - Users can view their todo list.
    - currently hardcoded
  ![screencapture-probable-eureka-wxqpvgp59w7f55jp-3000-app-github-dev-2025-03-10-01_11_23](https://github.com/user-attachments/assets/cd5c716b-60d3-4949-9591-b186f724318b)
  - Users can update (edit or mark as complete) tasks.
    - modal completed, logic needs to be implemented properly
  ![probable-eureka-wxqpvgp59w7f55jp-3000 app github dev_(desktop)](https://github.com/user-attachments/assets/4a4e4b01-eb02-436f-b27d-74db5b0062ad)

    - progress bar tracks how many tasks have been marked as complete
  ![screencapture-probable-eureka-wxqpvgp59w7f55jp-3000-app-github-dev-2025-03-10-01_21_55](https://github.com/user-attachments/assets/55388027-3694-4c39-a572-7aed1d77cc76)

  - Users can create new todos.
    - modal completed, logic needs to be implemented properly

  ![probable-eureka-wxqpvgp59w7f55jp-3000 app github dev_(desktop) (1)](https://github.com/user-attachments/assets/556836f1-ac17-48bf-9107-ae781200cfda)

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

