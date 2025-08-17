Currency Converter

Project Overview
A comprehensive web application that allows users to search, discover, and convert currency of any country of their choice.
Features
 Allow users to select a base currency and a target currency.
 Show historical exchange rate trends between two currencies
 Implement a search bar to find specific currencies
Let users mark currencies as favorites for quick access.
Technical Requirements
Essential Components You'll Need:
1. Project set up
Create a React Project (e.g with Vite)
Install and configure Tailwind CSS
2. API Integration
Use the ExchangeRate API or similar
Get real-time rates
	GET https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
Get Historical data:
	GET https://v6.exchangerate-api.com/v6/YOUR_API_KEY/history/USD/YYYY/MM/DD
Get list of supported currencies:
	GET https://v6.exchangerate-api.com/v6/YOUR_API_KEY/codes
User Interface Components:
CurrencyConverter.jsx- Input form for Base/Target Currency & amount.
ExchangeHistory.jsx  - Chart Visualization of past rates.
CurrencyList.jsx  -  Searchable list of currencies.
 Favorites.jsx - Quick-access section for saved currencies

State Management
Use useState & useEffect for handling data.
Store Favorite currencies in Local Storage.
Detailed Timeline & Milestones
Week 1: Ideation & Planning Phase 
Goals: Complete project planning and setup
Set up development environment
Create GitHub repository
Research and select APIs
Create initial wireframes
Set up project folder structure
Deliverables:
Project roadmap (this document)
API research and selection
Development environment setup

Week 2: Design Phase
Goals: Create a comprehensive design system
Create detailed mockups for all pages
Design component library
Define color scheme and typography
Create responsive design guidelines
Design user flow diagrams
Create a style guide
Deliverables:
Complete UI/UX mockups
Design system documentation
Responsive design specifications

Week 3: Project Setup & Authentication Base
Goals:
Set up React project (Vite or CRA).


Install Tailwind CSS (optional but recommended for responsive UI).


Set up routing (react-router-dom).


Implement authentication system (e.g., Firebase Auth).


Sign up


Login


Logout


Create basic navigation bar with links to:


Home (Currency Converter)


Exchange History


Favorites


Login/Signup


Deliverables:
Working app with authentication flow.


User session persists after refresh.


Week 4: Currency Conversion Feature
 Integrate ExchangeRate API for real-time conversion.


Create CurrencyConverter component:


Select base & target currency.


Input amount.


Display converted value instantly.


Implement dropdown or search for currency selection.


Add error handling for invalid inputs or API failures.




Goal – Exchange Rate History & Charts

Use API to fetch historical exchange rates.


Create ExchangeHistory component:


Select date range (last 7 days, 1 month, 1 year).


Display historical data in a chart (using Chart.js or Recharts).


Make charts responsive for mobile & desktop.
Goal-  Favorites & User Personalization
Allow users to mark currencies as favorites.


Save favorites to:


Firebase Firestore (if authenticated)


LocalStorage (if not logged in)


Create Favorites page showing quick conversion options.


Improve search/filter UI for faster selection.
Deliverables:
Working exchange rate history with a clean, interactive chart.
User can select currencies and see conversion in real-time.
User can save, view, and remove favorite currencies.

Week 5 – Polishing, Testing & Deployment
Goals:
Implement dark mode toggle.


Add loading states and skeleton screens.


Improve error handling (network errors, API limits).


Test app on different devices for responsiveness.


Deploy on Vercel or Netlify.


Final presentation/demo ready.


Deliverables:
Fully functional, deployed Money Converter App with:


Authentication


Currency conversion


Historical charts


Favorites feature

