# QuickTime Project

QuickTime is a **turf booking application** that allows users to browse and book sports turfs by selecting an available time slot and making a payment. The platform also provides a dedicated **owner dashboard**, enabling turf owners to add, update, and manage their turfs efficiently.

## Features

### **User Functionality**
- Browse available turfs.
- Select a time slot and make a booking.
- Make payments to confirm bookings.
- Mobile OTP-based login instead of traditional password authentication.
- **Role-based authentication**: Users cannot log in as owners and vice-versa.
- **Redirection based on role**: Users are redirected to their respective dashboards upon successful login.
- **Validation checks**: Ensures a user exists before login and verifies role compatibility with the login page.

### **Owner Functionality**
- Add new turfs with necessary details.
- Modify existing turf details such as pricing, availability, and location.

### **Authentication & Security**
- **Mobile OTP-based authentication** using **Twilio** for login and signup.
- Validations to check if a user exists and ensure the correct role-based login.
- Secure handling of authentication data.

## Tech Stack

### **Frontend**:
- [Vite.js](https://vitejs.dev/) – Fast build tool and development server.
- [Redux Toolkit](https://redux-toolkit.js.org/) – For efficient state management across the application.

### **Backend**:
- [Node.js](https://nodejs.org/en/) – JavaScript runtime for building the backend.
- [Express.js](https://expressjs.com/) – Web framework for handling HTTP requests.
- [MongoDB](https://www.mongodb.com/) – NoSQL database for storing user and turf data.
- **Twilio API** – Used for generating and handling OTP authentication.

## Installation

To run this project locally, follow these steps:

### **1. Clone the repository**

```bash
git clone https://github.com/your-username/quicktime-project.git
cd quicktime-project
```

### **2. Install dependencies**

#### **Frontend**
```bash
cd frontend
npm install
npm run dev
```

#### **Backend**
```bash
cd backend
npm install
npm start
```

### **3. Set up Environment Variables**
Create a `.env` file in the **backend** folder and add the following:

```
MONGO_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
JWT_SECRET=your_secret_key
```

---


