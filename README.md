# React Task Manager
A simple and responsive **Task Manager application** built with **React.js and Vite** as part of the AUREX Full-Stack Engineering Internship — Month 2, Week 1.
## Live Demo
[View Live Project](https://ayesha-ahsan07.github.io/react-task-manager/)
## Project Overview
The React Task Manager allows users to create and manage their daily tasks through a simple and interactive interface.
This project focuses on learning **React fundamentals and component-based architecture**, including components, JSX, state management, event handling, props, and dynamic UI updates.
## Technologies Used
* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Git & GitHub
* GitHub Pages
## Features
* Add new tasks
* Mark tasks as completed
* Undo completed tasks
* Edit existing tasks
* Delete tasks
* Filter tasks by:
  * All
  * Active
  * Completed
* Dynamic task list updates
* Responsive user interface
* Component-based React structure
* Live deployment using GitHub Pages
## React Concepts Practiced
### Components
The application is divided into reusable React components to keep the code organized and maintainable.
### JSX
JSX is used to create and structure the application's user interface.
### State Management
React state is used to store and update task data dynamically.
### Event Handling
Events such as adding, editing, completing, and deleting tasks are handled using React event handlers.
### Props
Props are used where necessary to pass data and functionality between components.
### Conditional Rendering
The application dynamically displays task information and filtering results based on the current state.
## Project Structure
react-task-manager/
│
├── public/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
## How to Run Locally
Clone the repository:
```bash
git clone https://github.com/ayesha-ahsan07/react-task-manager.git
```
Open the project folder:
```bash
cd react-task-manager
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Then open the local URL provided by Vite in your browser.
## Deployment
The project is deployed using **GitHub Pages** with a GitHub Actions workflow.
Every update pushed to the `main` branch triggers the deployment workflow, which:

1. Installs project dependencies
2. Builds the React application
3. Creates the production `dist` folder
4. Uploads the build artifact
5. Deploys the application to GitHub Pages
## Learning Outcomes
Through this project, I practiced:
* Understanding React fundamentals
* Creating React components
* Working with JSX
* Managing component state
* Handling user events
* Updating the UI dynamically
* Using conditional rendering
* Building a component-based application
* Using Vite for React development
* Deploying a React application with GitHub Actions
## Challenges and Learning

The main challenges were understanding React component structure, managing state, handling events, and updating the task list dynamically.
I solved these challenges through practice, testing, and debugging. This project helped me understand how React manages UI updates through state and how reusable components make applications easier to organize and maintain.
## Internship
**AUREX Full-Stack Engineering Internship**
**Month 2 — Week 1: React.js Fundamentals & Component Architecture**
**Project:** React Task Manager (Part 1)
