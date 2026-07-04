# Sorting Visualizer (React Edition)

A beautifully designed, interactive web application to visualize classic sorting algorithms. Built completely with **React** and **Vite** for a high-performance, frame-by-frame animation experience.

## Features
- **5 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.
- **Dynamic Control**: Change the array size (10 to 100 elements) and sorting speed (0.5x to 4x).
- **Responsive Design**: Automatically adjusts to fit perfectly on any screen size, from desktop monitors to mobile phones.
- **Premium Aesthetics**: Features a modern glassmorphic dark-mode UI with beautiful color highlights for current comparisons and sorted elements.

## Tech Stack
- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Glassmorphism + CSS Variables)

## Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krishjha1121/Sorting-Visualiser.git
   cd Sorting-Visualiser
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server URL provided (usually `http://localhost:5173`).

## Architecture & Project Structure
- `src/App.jsx`: Main React component managing state and the asynchronous animation loop.
- `src/components/`: Contains pure UI components like the `Navbar` and the `Visualizer` display.
- `src/utils/sortingAlgorithms.js`: Contains pure JS functions for the algorithms, strictly decoupled from the DOM. These functions return an array of animation sequences that React uses to update the UI frame-by-frame.

## Author
[Krish Jha](https://github.com/krishjha1121)
