LoanBuddy v10

LoanBuddy v10 is a web application designed to assist users in managing and tracking their loans efficiently. Built with modern web technologies, it offers a user-friendly interface for monitoring loan statuses, payments, and schedules. This updated version introduces enhanced features and improved performance.

Features

Loan Management: Add, edit, and delete loan entries with details such as amount, interest rate, and duration.

Payment Tracking: Record payments made towards loans and view payment history.

Amortization Schedule: Generate and display amortization schedules for better financial planning.

Notifications: Receive reminders for upcoming payments and due dates.

Multi-Currency Support: Manage loans in different currencies.

User Authentication: Secure login and user-specific data management.

Responsive Design: Optimized for use across desktop and mobile devices.

Technologies Used

Frontend: React.js, Vite

State Management: React Context API

Styling: CSS Modules

Backend: Node.js, Express

Database: MongoDB

Build Tool: Vite

Authentication: JWT (JSON Web Tokens)

Getting Started

To run LoanBuddy v10 locally, follow these steps:

Clone the repository:

git clone zoneshosting/LoanBuddy-v10-up.git
cd LoanBuddy-v10-up

Install dependencies:

yarn install

Set up environment variables:

Create a .env file in the root directory.

Add the following environment variables:

REACT_APP_API_URL=http://localhost:5000
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongo_connection_string

Start the development server:

yarn start

Start the backend server:

yarn server

Open the application:
Navigate to http://localhost:3000 in your browser to view the application.

Scripts

In the project directory, you can run:

yarn start: Runs the frontend app in development mode.

yarn build: Builds the frontend app for production to the dist folder.

yarn server: Starts the backend server.

yarn test: Launches the test runner in interactive watch mode.

License

This project is exclusively licensed to the author. Unauthorized redistribution, modification, or use without explicit permission is prohibited.
