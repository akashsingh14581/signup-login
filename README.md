# signup-login
1) npm init -y
2) npm i express mongoose nodemon dotenv
3) package.json me:- 
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },


# User Authentication API

This is a simple user authentication API built using **Express.js**, **MongoDB**, and **JWT**. It allows users to sign up with basic validation and secure password hashing. The API also provides an endpoint to handle user registration.

## Features

- **Sign Up**: Allows users to register with `name`, `email`, `password`, and `role` fields.
- **Password Hashing**: Passwords are hashed using **bcrypt** for security.
- **Database**: MongoDB is used as the database to store user information.
- **Environment Variables**: Uses `.env` file to store sensitive information such as **MongoDB URI** and **JWT Secret**.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt.js

## Requirements

- Node.js
- MongoDB

## Setup

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/auth-api.git
cd auth-api
