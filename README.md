# ARGON - A Full Stack Next.js Admin Panel

<h1>Setup Instructions</h1>

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
2. Create and activate a virtual environment: 
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
3. Install the required Python packages:
   ```sh
   pip install -r requirements.txt
4. Run the FastAPI backend:
   ```sh
   uvicorn app.main:app --reload

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
2. Install the required Node.js packages:
   ```sh
   npm install
3. Run the nextjs frontend:
   ```sh
   npm run dev

<h1>Assumptions and Design Decisions</h1>

1. I have predifined a fake user database containing only one user:
   username: user123, password: password
2. I have used Tailwind CSS to design the whole frontend application.
3. I have adapted a simple 'fake-token' for authentication purposes.

<h1>Future Scope</h1>

1. Connect the application to a real database like MongoDB to make it more scalable.
2. Use real salting and hashing techniques to ensure user sequrity.
3. Add third party authentication options like google, facebook, etc.
4. Add more demographic tools like Line charts, tables, etc.
5. Make the design more appealing and user-friendly.
