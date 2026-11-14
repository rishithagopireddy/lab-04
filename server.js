
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const initializeDB = require("./db");

const app = express();

app.use(express.json());

const PORT = 3000;
const JWT_SECRET = "lab4_demo_secret_key";

let db;

// REGISTER ROUTE
app.post("/register/", async (request, response) => {
  try {
    const { username, name, password } = request.body;

    if (!username || !name || !password) {
      return response.status(400).send({
        message: "Username, name and password are required",
      });
    }

    const existingUser = await db.get(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (existingUser) {
      return response.status(400).send({
        message: "Username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.run(
      `INSERT INTO users (username, name, password)
       VALUES (?, ?, ?)`,
      [username, name, hashedPassword]
    );

    response.status(201).send({
      message: "User registered successfully",
    });

  } catch (error) {
    console.error(error.message);
    response.status(500).send({
      message: "Internal server error",
    });
  }
});


// LOGIN ROUTE
app.post("/login/", async (request, response) => {
  try {
    const { username, password } = request.body;

    if (!username || !password) {
      return response.status(400).send({
        message: "Username and password are required",
      });
    }

    const user = await db.get(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (!user) {
      return response.status(400).send({
        message: "Invalid username",
      });
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatched) {
      return response.status(400).send({
        message: "Invalid password",
      });
    }

    const payload = {
      username: user.username,
    };

    const jwtToken = jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    response.status(200).send({
      jwt_token: jwtToken,
    });

  } catch (error) {
    console.error(error.message);
    response.status(500).send({
      message: "Internal server error",
    });
  }
});


// INITIALIZE DATABASE AND SERVER
const initializeDBAndServer = async () => {
  try {
    db = await initializeDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });

  } catch (error) {
    console.error(`Database error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();
