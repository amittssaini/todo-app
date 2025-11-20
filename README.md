# 📝 Task Manager App  
A full-stack Task Manager application built using **React (Frontend)**, **Node.js + Express (Backend)** and **MongoDB (Database)**.  
Users can create, edit, delete and view tasks easily with a clean UI and responsive design.

---

## 🚀 Features

### ✅ Frontend (React)
- Add new task  
- Edit task  
- Delete task  
- List all tasks  
- Modal form for Add/Edit  
- Live validation (title must not be empty)  
- Notistack notifications  
- Responsive (Tailwind CSS)

### ✅ Backend (Node.js + Express)
- Create Task (`POST /tasks`)
- Get All Tasks (`GET /tasks`)
- Update Task (`PUT /tasks/:id`)
- Delete Task (`DELETE /tasks/:id`)
- Case-insensitive title uniqueness validation  
  (e.g. "Yoga" == "yoga")

### 🗄️ Database (MongoDB)
- Mongoose models  
- Unique title validation  
- CRUD operations  

---

## 📂 Folder Structure



todo-app/
│
├── backend/
│ ├── controllers/
│ ├── services/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ ├── package.json
│
|
├── src/
│ ├── components/
│ ├── pages/
│ ├── config.js
│ ├── App.js
├── package.json



---

# 🛠️ **How to Run the Project**

## 🔹 1. Clone the repository




---

# ⚙️ **Backend Setup**

cd backend
npm install


### 📝 Create `.env`

MONGO_URI=your-mongo-db-url
PORT=8084


---

# 🎨 **Frontend Setup**
npm start
# 🌐 **Project URLs**

- Frontend: **http://localhost:3000**
- Backend: **http://localhost:5000**

- # 🧪 API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Get all tasks |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |
