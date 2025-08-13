# Mobile-first PWA Finance Coach

## 📌 Overview
The **Mobile-first PWA Finance Coach** is a financial coaching application designed to help individuals — especially gig workers, informal sector employees, and those with irregular income — manage their finances more effectively. The app integrates AI-driven insights with user data from multiple sources, providing personalized recommendations and reminders to improve savings, investment habits, and spending control.

## 🚀 Features
- **Learning Agent**: Continuously learns from user behavior to deliver tailored insights.
- **Financial Coaching Agent**: Offers actionable advice on saving, investing, and spending.
- **Multiple Account Management**: Fetches transaction data from SMS and differentiates based on account numbers.
- **Data Integration**: Connects with **Firebase**, **Google Sheets**, or Excel for real-time updates.
- **AI-Powered Insights**: Uses **Groq Model** and **LLM** for intelligent recommendations.
- **Progressive Web Application (PWA)**: Optimized for mobile-first experience.
- **n8n Integration**: Automated workflows for data fetching, processing, and AI requests.

## 🛠️ Technologies Used
- **Frontend**: React + Vite + JavaScript
- **PWA**: Mobile-first design with offline support
- **Backend & Automation**: n8n for data orchestration
- **Database**: Firebase, Google Sheets, Excel
- **AI**: Groq Model + Large Language Model (LLM)

## 📱 Mobile-first Layout
The UI is designed with a mobile-first approach, ensuring the best experience for smartphone users and smooth scalability for desktop use.

## 📂 Project Structure
```
finance-coach-pwa/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 📦 Installation
```bash
git clone <repo-url>
cd finance-coach-pwa
npm install
npm run dev
```

## 🔗 Future Enhancements
- Multi-language support
- Advanced AI-driven goal tracking
- Voice command integration
