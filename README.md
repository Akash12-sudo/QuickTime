# QuickTime Project

QuickTime is a turf booking application where users can browse available turfs, select a time slot, and make a payment to book the slot. For owners, the platform provides functionality to manage turfs by adding or modifying details.

## Features

- **User Functionality**:
  - Browse available turfs.
  - Select a timeslot and book the turf.
  - Make payments to confirm bookings.
  - Mobile OTP-based login instead of traditional password-based authentication.

- **Owner Functionality**:
  - Add new turfs.
  - Modify turf details.
  
- **Authentication**:
  - Mobile OTP login and signup functionality.

## Tech Stack

- **Frontend**:
  - [Vite.js](https://vitejs.dev/) – A fast build tool and development server.
  - [ContextAPI](https://reactjs.org/docs/context.html) – Used for state management across the app.

- **Backend**:
  - [Node.js](https://nodejs.org/en/) – JavaScript runtime for building the backend.
  - [Express.js](https://expressjs.com/) – Web framework for Node.js to handle HTTP requests.
  - [MongoDB](https://www.mongodb.com/) – A NoSQL database for storing user and turf data.
  - OTP-based authentication for user login and signup.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quicktime-project.git
cd quicktime-project
