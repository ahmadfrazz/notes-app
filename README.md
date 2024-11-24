# Sticky Notes App

## Overview

A simple ReactJS application to create draggable sticky notes.

## Features

- Add one or more notes.
- Drag-and-drop to any position.
- Persistent state of notes using Redux/Tollkit.
- Persistent state of notes position using Redux/Tollkit.
- Responsive UI using TailwindCss.
- Efficiently handling errors to ensure seamless user experience.

## Technologies Used

- ReactJS
- Ant Design UI
- TailwindCss
- Redux/Tollkit
- react-beautiful-dnd

## Running the App Locally

1. Clone the repository:
   Go to VSCode terminal and run the follwing line:
   git clone https://github.com/ahmadfrazz/notes-app.git

2. Navigate to the project directory:
   cd notes-app

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Go to http://localhost:5173 in your browser

## Design Decisions

- Maintained the clean, organized and reusable code structure.
- Created Proper Dahsboard Layout to render children components.
- Created Re-usable components.
- Used AntD UI to utilise pre-built components and customised them as per requiremnts.
- Implemented Redux/Toolkit for global state.
- Implemented Tailwindcss to create responsive layout and style the elements.

## Challenges Faced

1. **State Persistence:**

   - Issue: Sticky notes needed to persist across page refresh.
   - Solution: Implemented Redux/Tollkit to store the notes data.

2. **Notes Position Persistence:**

- Issue: Notes position needed to persist across page refresh.
- Solution: Implemented Redux/Tollkit to store the notes position.

2. **Bonus: Integarte Google Login API:**

- Issue: It does not provide fully available api for login, instead, only added as a test user's email can use this API if domain is unverified. Due to this limitation it is not integrated.
