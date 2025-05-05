# ✈️ PlanwiseAI

**PlanwiseAI** is an AI-powered travel itinerary planner that generates personalized trip plans based on your destination, travel days, and preferences. It combines Gemini AI, Google Maps, and Firebase to deliver a seamless experience.

🚀 **Live Demo**: [https://ai-travel-adh.vercel.app](https://ai-travel-adh.vercel.app)

---

## 🌟 Features

- AI-generated itineraries with Gemini API
- Google Maps integration for location data
- Firebase setup for backend support
- Fast UI built with React + Vite
- Vercel deployment-ready

---

## ⚙️ Tech Stack

- **Frontend**: React, Vite  
- **AI Integration**: Gemini API  
- **Backend**: Firebase  
- **Authentication**: Auth0 (optional)  
- **Deployment**: Vercel  

---

## 🔐 Environment Variables

Create a `.env` file in your root directory with the following:

```env
# Google Maps API
VITE_GOOGLE_MAP_API_KEY=your_google_map_api_key

# Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key

# Domain Name
VITE_DOMAIN_NAME=your_domain_name

# Auth0 (optional)
VITE_AUTH0_CLIENT_ID=your_auth0_client_id

# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_MEASUREMENT_ID=your_measurement_id
