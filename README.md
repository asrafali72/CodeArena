# 💻 CodeArena – Real-Time Coding Platform with AI Assistance

CodeArena is a full-stack coding platform built with the **MERN Stack** that enables users to solve programming problems, execute code in real time, and receive AI-powered assistance.

The platform integrates the **Judge0 API** for multi-language code execution and **Generative AI** to provide coding hints, explanations, and query support.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* Secure user authentication using JWT
* Password hashing with bcrypt
* Cookie-based session management
* Protected routes for authenticated users

### 💻 Real-Time Code Execution

* Execute code in multiple programming languages
* Real-time code compilation and output
* Powered by Judge0 API

### 🤖 AI-Powered Assistance

* AI-generated coding hints and explanations
* Ask coding-related questions directly within the platform
* Intelligent support for debugging and problem-solving

### 📝 Problem Management

* Browse coding problems
* View problem descriptions, constraints, and examples
* Submit solutions and track results

### 📊 User Dashboard

* Track solved problems
* View submission history
* Monitor coding progress

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### APIs & Services

* Judge0 API
* OpenAI API / Google Gemini API

### Authentication

* JSON Web Tokens (JWT)
* bcrypt

---

## 🏗️ Project Structure

```bash
codearena/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       └── services/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JUDGE0_API_URL=your_judge0_api_url

OPENAI_API_KEY=your_openai_api_key

GEMINI_API_KEY=your_gemini_api_key
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/asrafali72/codearena.git
```

### 2. Navigate to the Project Directory

```bash
cd codearena
```

### 3. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

Create a `.env` file using the example above.

### 5. Start the Development Servers

#### Backend

```bash
cd server
npm run dev
```

#### Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

Create a `screenshots` folder and add images such as:

* Sign-Up page:
  
  ![Sign-up](https://github.com/asrafali72/CodeArena/blob/main/Screenshorts/sign-up.png) 
* Problem page:
  
  ![Problem page](https://github.com/asrafali72/CodeArena/blob/main/Screenshorts/problem.png)
* Admin pannel
  
   ![Admin Pannel](https://github.com/asrafali72/CodeArena/blob/main/Screenshorts/adminpanel.png) 
* Add Problem
  
   ![Addproblem](https://github.com/asrafali72/CodeArena/blob/main/Screenshorts/insertproblem.png) 
* Delete & Update
  
   ![Sign-up](https://github.com/asrafali72/CodeArena/blob/main/Screenshorts/delete%26upload.png) 


Example:

```markdown


![Code Editor](./screenshots/editor.png)

![AI Assistant](./screenshots/ai-assistant.png)
```

---

## 🔌 API Integrations

### Judge0 API

Used for:

* Real-time code execution
* Multi-language support
* Compilation and runtime output

### Generative AI API

Used for:

* Coding hints
* Code explanations
* Debugging assistance
* Programming-related queries

---

## 🔒 Security Features

* JWT-based authentication
* Password hashing with bcrypt
* Protected API routes
* Input validation and sanitization
* Secure cookie handling
* Role-Based Access Control (RBAC)

---

## 🔮 Future Enhancements

* Contest mode
* Leaderboards
* Discussion forums
* Code collaboration
* AI-generated problem recommendations
* Code plagiarism detection

---

## 👨‍💻 Author

**Asraf Ali**

* GitHub: https://github.com/asrafali72
* LinkedIn: https://linkedin.com/in/your-linkedin-username
* Email: [asarafali066@gmail.com](mailto:asarafali066@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.
