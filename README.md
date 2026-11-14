# Lab 4 – Authentication and User Management

## Student Details
- **Name:** G.Rishitha
- **Roll Number:** 252U1R6083
- **Department:** AIML
- **Course:** Backend Development Fundamentals
- **Year:** II
- **Lab Number:** 04
- **Lab Title:** Authentication and User Management

---

## 1. Aim
To implement user registration and login functionality using Node.js, Express.js, bcrypt password hashing, and JSON Web Tokens (JWT).

## 2. Technologies Used
- Node.js
- Express.js
- SQLite
- bcrypt
- JSON Web Token (JWT)
- Postman
- Visual Studio Code

## 3. Project Structure

```text
Lab-04-Registration-JWT/
│
├── server.js
├── db.js
├── package.json
├── package-lock.json
├── database.db
├── .gitignore
├── README.md
│
└── screenshots/
    ├── register-success.png
    ├── register-error.png
    ├── register-missing-details.png
    ├── login-success.png
    ├── login-error.png
    ├── login-unknown-user.png
    └── database.png
```

## 4. Installation

Install the required dependencies:

```bash
npm install express sqlite sqlite3 bcrypt jsonwebtoken
npm install --save-dev nodemon
```

## 5. Running the Project

Start the server using:

```bash
npm run dev
```

Server URL:

```text
http://localhost:3000/
```

## 6. API Endpoints

### A. User Registration

- **Method:** POST
- **Endpoint:** `/register/`

Request Body:

```json
{
  "username": "rishitha",
  "name": "Rishitha",
  "password": "test123"
}
```

Successful Response:

```json
{
  "message": "User registered successfully"
}
```

### B. User Login

- **Method:** POST
- **Endpoint:** `/login/`

Request Body:

```json
{
  "username": "rishitha",
  "password": "test123"
}
```

Successful Response:

```json
{
  "jwt_token": "generated_jwt_token"
}
```

## 7. Features Implemented

- User registration with username, name, and password.
- Duplicate username validation.
- Password hashing using bcrypt.
- User login with password verification.
- JWT token generation after successful login.
- Invalid username and password handling.
- SQLite database integration.
- JSON request and response handling.

## 8. Security Implementation

- Passwords are hashed using bcrypt before storing them in the database.
- Passwords are never stored as plain text.
- bcrypt.compare() verifies login passwords.
- JWT tokens are generated using jsonwebtoken.
- Only the username is included in the JWT payload.
- Parameterized SQL queries are used for database operations.

## 9. Testing

The following test cases were performed using Postman:

1. Successful user registration.
2. Registration with an existing username.
3. Registration with missing details.
4. Successful user login.
5. Login with an incorrect password.
6. Login with an unknown username.
7. Verification of the generated JWT token.
8. Verification of hashed passwords in the SQLite database.

## 10. Learning Outcomes

- Understood authentication concepts.
- Implemented user registration and login APIs.
- Learned password hashing and verification using bcrypt.
- Understood JWT token generation.
- Practiced API testing using Postman.
- Learned to connect Express.js applications with SQLite databases.

## 11. Conclusion

Successfully implemented a user authentication system using Node.js, Express.js, SQLite, bcrypt, and JWT. The application supports secure user registration, login validation, password hashing, and JWT token generation.

## 12. GitHub Repository

Repository: https://github.com/rishithagopireddy/lab-04