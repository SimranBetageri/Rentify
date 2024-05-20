# Rentify - Where Renting Meets Simplicity

## Description

Rentify is a platform designed to simplify the rental process for both property owners and tenants. Property owners can easily list their properties, while tenants can find and express interest in rental properties that meet their key requirements.

## Features

- User registration and login
- Property listing for sellers with the ability to update and delete listings
- Property browsing for buyers with an "I'm Interested" feature
- Filtering of properties based on various criteria
- Pagination and form validation
- Authorization to view seller details only for logged-in buyers
- Email notifications to both buyers and sellers on interest expression

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Deployment:** Netlify (Frontend), Heroku (Backend)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB Atlas account or local MongoDB instance
- Heroku account
- Netlify account

### Local Development

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/rentify.git
    cd rentify
    ```

2. **Set up the backend:**

    ```sh
    cd backend
    npm install
    ```

    - Create a `.env` file in the `backend` directory with the following content:

        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_secret_key
        ```

    - Start the backend server:

        ```sh
        npm start
        ```

3. **Set up the frontend:**

    ```sh
    cd ../frontend
    npm install
    ```

    - Start the frontend development server:

        ```sh
        npm start
        ```

4. **Access the application:**

    - Open your browser and navigate to `http://localhost:3000`.

### Deployment

#### Backend Deployment to Heroku

1. **Create a Heroku app:**

    ```sh
    heroku create rentify-backend
    ```

2. **Set up environment variables on Heroku:**

    ```sh
    heroku config:set MONGO_URI=your_mongodb_connection_string
    heroku config:set JWT_SECRET=your_secret_key
    ```

3. **Deploy the backend:**

    ```sh
    git add .
    git commit -m "Deploy backend to Heroku"
    git push heroku master
    ```

#### Frontend Deployment to Netlify

1. **Create `netlify.toml` in the root directory:**

    ```toml
    [build]
      command = "npm run build"
      publish = "frontend/build"

    [[redirects]]
      from = "/*"
      to = "/index.html"
      status = 200
    ```

2. **Deploy to Netlify:**

    ```sh
    netlify login
    netlify init
    netlify deploy --prod
    ```

### Deployment Links

- **Backend:** [Heroku](https://rentify-backend.herokuapp.com)
- **Frontend:** [Netlify](https://rentify.netlify.app)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to all the open-source contributors whose libraries and tools made this project possible.
