# React Application for Viewing Laboratory Work Reports

This project is a single-page React application designed to display a structured set of laboratory work reports for the course **“Modern Internet Programming Technologies.”**  
It provides a simple and intuitive interface for navigating between different lab assignments and viewing their content without reloading the page.

## 🌐 Live Demo:  
https://internet-labs-komarov.web.app/

The deployment was done using **Firebase Hosting**.


---

## 📌 Overview

The app presents a list of laboratory works on the left and dynamically loads the selected report into the main viewing area.  
It uses class-based React components and custom styling to provide a clean and organized user interface.

The key component of the system is `App.js`, which manages navigation, current selection, and rendering of the appropriate lab content.

---

## 🧩 Main Features

### ✔ Dynamic Navigation Panel  
Users can click on any laboratory work in the left sidebar to instantly display its content.  
The active item is visually highlighted.

### ✔ Content Viewer  
A central content area updates automatically based on the selected laboratory work.  
Reports are loaded via a dedicated `LabSwitcher` component.

### ✔ Header Section  
The top section of the page displays:
- the title of the report collection,
- the course name,
- the student’s full name and group.

### ✔ Smooth UI Experience  
The interface uses:
- custom scrollbars,
- adaptive font scaling,
- clean separation of navigation and content,
- responsive layout logic.

---

## 🛠 Technologies Used

- **React (Class Components)** – main application structure  
- **JavaScript (ES6+)** – logic and component interaction  
- **HTML5 + JSX** – layout and rendering  
- **CSS3** – custom styling (scrollbars, layout, hover effects)  
- **Create React App (CRA)** – project bootstrapping  
- **Jest + React Testing Library** – testing environment included by CRA  

Core files include:

- `index.js` – renders the application into the DOM  
- `App.js` – main component managing navigation and content display  
- `App.css` – complete styling for layout and components  
- `LabSwitcher` – dynamic loader for lab content  
- `reportWebVitals.js` – performance measurement utilities  
- `setupTests.js` – Jest DOM test configuration  

---

## 🎨 Interface Structure

The interface consists of three major blocks:

### 1️⃣ Left Navigation Panel  
- Displays a list of 10 laboratory works + module  
- Active item is highlighted (`cur_lab` class)  
- Scrollable sidebar with custom scrollbar styling  

### 2️⃣ Header Section  
Contains course information and student details:
- “Отчеты о лабораторных работах”
- Course title
- Student’s name and group

### 3️⃣ Main Content Area  
- Displays the selected laboratory work  
- Automatically updates when navigating  
- Scrollable with custom stylization  


## 📝 Purpose of the Project

The project serves as:
- a structured repository of laboratory reports,
- a demonstration of SPA navigation using React class components,
- a learning tool for organizing multi-section content in a web UI.

It effectively illustrates how to:
- manage state,
- update UI dynamically,
- build a two-column layout,
- handle component communication in React.

---

## ✅ Conclusion

This React application is a clean example of building a simple, educational SPA with dynamic navigation and content rendering. Its structure, styling, and component logic make it suitable for coursework, demonstrations, or further expansion into a more complex educational platform.

If needed, it can easily be extended with:
- routing,
- local storage,
- Markdown-based content,
- improved responsive layout.

---
