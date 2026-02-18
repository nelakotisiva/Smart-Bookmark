# Smart Bookmark CRUD Application

A full-stack web application that allows users to manage bookmarks by adding, viewing, updating, and deleting URLs.

This project demonstrates end-to-end development using **Spring Boot REST APIs (Backend)** and **React.js (Frontend)**.

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs
* MySQL Database

### Frontend

* React.js
* Axios
* HTML, CSS, JavaScript

---

## Features

* Add Bookmark (Title + URL)
* View All Bookmarks
* Update Bookmark
* Delete Bookmark
* Open link in new tab

---

## Project Structure

Smart-Bookmark
│
├── backend  → Spring Boot Application
└── frontend → React Application

---

## Prerequisites

Install the following software before running the project:

* Java 17 or above
* MySQL Server
* Node.js (includes npm)
* Git

---

## Backend Setup (Spring Boot + MySQL)

### 1. Configure Database

Open:

backend/src/main/resources/application.properties

Update according to your MySQL credentials:

```
spring.datasource.url=jdbc:mysql://localhost:3306/bookmarkdb?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

The database **bookmarkdb** will be created automatically.

---

### First Time Table Creation

If tables are not created automatically:

Change

```
spring.jpa.hibernate.ddl-auto=update
```

to

```
spring.jpa.hibernate.ddl-auto=create
```

Run the application once → tables will be created
Then change it back to:

```
spring.jpa.hibernate.ddl-auto=update
```

---

### 2. Run Backend

Open backend folder in IDE (IntelliJ / Eclipse / VS Code)

Run:

SmartBookmarkApplication.java

Server starts at:

http://localhost:8080

---

## Frontend Setup (React)

### 1. Install Node.js

Download from: https://nodejs.org

Verify installation:

```
node -v
npm -v
```

---

### 2. Create React App (If frontend not present)

```
npx create-react-app frontend
cd frontend
npm install axios
```

Then copy project source files into the `src` folder.

*(If frontend already exists in repository, skip this step)*

---

### 3. Install Dependencies

If you cloned the repository:

```
cd frontend
npm install
```

---

### 4. Run Frontend

```
npm start
```

Application runs at:

http://localhost:3000

Make sure backend is running before starting frontend.

---

## API Endpoints

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | /api/bookmarks      | Fetch all bookmarks |
| POST   | /api/bookmarks      | Add bookmark        |
| PUT    | /api/bookmarks/{id} | Update bookmark     |
| DELETE | /api/bookmarks/{id} | Delete bookmark     |

---

## Application Flow

1. User interacts with React UI
2. React sends HTTP requests using Axios
3. Spring Boot Controller handles request
4. Service layer processes logic
5. JPA Repository communicates with MySQL
6. Response returned and UI updates automatically

This represents a complete full-stack CRUD workflow.

---

## Author

Nelakoti Siva
