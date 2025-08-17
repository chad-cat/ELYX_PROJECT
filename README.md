****Elyx Health Journey Dashboard****

****Project Overview****
The Elyx Health Journey Dashboard is a web application for the Elyx Hackathon, visualizing a member's personalized health journey over 8 months. It showcases health progress, decision-making rationale, and team engagement.

****Features****
Interactive Timeline: Chronological display of Rohan Patel's health journey by month and key episodes.
Detailed Episode View: Provides episode summaries, decision rationale (trigger, outcome, friction points), and relevant chat logs.
Internal Metrics Dashboard: Visualizes team engagement and conversation counts per expert role using charts.
Responsive Design: Optimized for all device sizes.

****Technologies Used****
Frontend: React.js, Vite, Recharts, CSS
Data: JSON





## Project Structure

```
elyx-dashboard/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── DetailsPanel.jsx
│ │ ├── InternalMetrics.jsx
│ │ └── Timeline.jsx
│ ├── data/
│ │ └── rohan_patel_journey.json
│ ├── App.css
│ ├── app.jsx
│ ├── index.css
│ └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```


****Setup & Run****
Create Project Folder:
Bash
mkdir elyx-dashboard
cd elyx-dashboard
Initialize Vite & Install Dependencies:
Bash
npm create vite@latest . -- --template react
npm install
npm install recharts


Place Files: Ensure all provided .json, .html, .jsx, and .css files are in their correct locations as per the Project Structure above.
Run Application:
Bash
npm run dev
Open http://localhost:5173/ in your browser.

****Addressing the Hackathon Problem*****
This project effectively solves the Elyx Hackathon problem by:
Generating Communication: The rohan_patel_journey.json contains a detailed 8-month simulated WhatsApp chat log, adhering to Rohan's persona, team roles, and all specified constraints (e.g., travel, diagnostic tests, adherence rates).
Visualizing Journey: The React app provides an interactive timeline and a detailed panel that explains the "why" behind health decisions. The InternalMetrics.jsx component visualizes team engagement, fulfilling the internal metrics requirement.

