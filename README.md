# Rentify - Where Renting Meets Simplicity

Rentify is a full-stack application designed to streamline the process of finding rental properties. It connects property owners (sellers) with prospective tenants (buyers) through an intuitive web interface.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features
- User Registration and Login
- Post and manage rental properties (sellers)
- View available rental properties (buyers)
- Express interest in a property
- Email notifications for interested buyers
- Property filtering
- Secure authentication using JWT

## Tech Stack
- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express, JWT, Bcrypt, Nodemailer
- **Database:** MongoDB
- **Other:** dotenv, Cors

## Setup

### Prerequisites
- Node.js and npm (or yarn)
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/rentify.git
    cd rentify
    ```

2. Install backend dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

5. Navigate to the `client` directory and install frontend dependencies:
    ```sh
    cd client
    npm install
    ```

6. Start the React application:
    ```sh
    npm start
    ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## API Endpoints

### User Routes
- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login a user

### Property Routes
- **POST /api/properties**: Create a new property (Protected)
- **GET /api/properties**: Get all properties
- **POST /api/properties/:id/interested**: Express interest in a property (Protected)

## Deployment

### Heroku Deployment
1. Install the Heroku CLI:
    ```sh
    npm install -g heroku
    ```

2. Create a new Heroku app:
    ```sh
    heroku create
    ```

3. Add MongoDB add-on:
    ```sh
    heroku addons:create mongolab
    ```

4. Set environment variables on Heroku:
    ```sh
    heroku config:set JWT_SECRET=your_jwt_secret_key
    heroku config:set EMAIL_USER=your_email@example.com
    heroku config:set EMAIL_PASS=your_email_password
    ```

5. Deploy the app:
    ```sh
    git push heroku main
    ```

### AWS Elastic Beanstalk Deployment
1. Install the AWS CLI and Elastic Beanstalk CLI:
    ```sh
    pip install awsebcli
    ```

2. Initialize Elastic Beanstalk:
    ```sh
    eb init
    ```

3. Create a new environment:
    ```sh
    eb create rentify-env
    ```

4. Set environment variables in Elastic Beanstalk console.

5. Deploy the app:
    ```sh
    eb deploy
    ```

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
# Rentify
