


# Understanding Real-Time Data Exchange
```markdown

This project is a learning playground to understand how **real-time communication** works on the web.  
It gradually explores different approaches:

1. **HTTP Requests** (Basic GET/POST for sending and receiving messages)
2. **HTTP Polling** (client keeps checking server for new data)
3. **Socket.io** (real-time, bi-directional communication)


```
---

## 📂 Project Structure


```bash

UnderStanding\_realTimeDataExchange/
├── client/   # React frontend
├── server/   # Express backend
├── .gitignore
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/grasyPatel/UnderStanding_RealTimeDataExchange.git
cd UnderStanding_realTimeDataExchange
````

### 2. Install Dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

---

## 🖥️ Running the App

### Start the Server

```bash
cd server
npm start
```

(Default: runs on [http://localhost:8080](http://localhost:8080))

### Start the Client

```bash
cd client
npm run dev
```

(Default: runs on [http://localhost:5173](http://localhost:5173))

---

## 🧩 Learning Steps

* **Step 1:** Build a chat app with simple **HTTP GET/POST**
* **Step 2:** Add **polling** so the client refreshes messages automatically
* **Step 3:** Replace polling with **Socket.io** for real-time chat

