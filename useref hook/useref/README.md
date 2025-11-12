⚛️ React useRef Hook – Complete Examples

This project demonstrates multiple real-world use cases of the useRef hook in React, showing how it behaves differently from useState and how it can be used effectively in functional components.

🚀 Overview

The repository contains several mini examples built with React that explain different ways to use useRef:

• Mutable Value Example – Using useRef to store data that updates without triggering a re-render
• DOM Manipulation Example – Accessing and modifying HTML elements directly using refs
• Stopwatch Example – Managing timers with useRef to avoid unnecessary re-renders

Each example highlights how useRef works and when it’s the right choice compared to useState.

🧠 What You’ll Learn

• Difference between useState and useRef
• How to store values that persist across renders without causing re-renders
• How to use useRef for direct DOM access
• How to manage setInterval or setTimeout cleanly with refs
• How useRef helps optimize performance by avoiding unnecessary updates

📂 Project Structure

Each example is organized into its own component for clarity:
• Counter Example
• DOM Example
• Stopwatch Example

You can import and test them individually through the main App component.

🛠️ How to Run

1️⃣ Clone this repository from GitHub
2️⃣ Open the folder in your code editor
3️⃣ Install dependencies with npm install
4️⃣ Start the development server with npm start
5️⃣ Open your browser and explore the examples

📘 Understanding useRef

• Does not cause re-render – Updating a ref value doesn’t trigger component re-rendering
• Persists across renders – The ref value remains the same between renders
• Access to DOM nodes – Can directly interact with DOM elements like buttons or inputs
• Useful for timers or external values – Keeps data consistent even when state changes

🧩 Examples Included

• Counter Example – Demonstrates how to compare useState and useRef behavior when storing values
• DOM Manipulation Example – Shows how to change a button’s color or focus an input using a ref
• Stopwatch Example – Uses useRef to store a timer ID, allowing the timer to start, stop, and reset without re-render issues

🧾 Key Takeaways

• useRef is not limited to DOM access — it’s a versatile tool for any mutable value that needs to persist across renders
• It’s perfect for managing imperative code like intervals, animations, or direct DOM updates
• Use it wisely to prevent performance issues caused by unnecessary state updates

💡 Why This Project

This repository is designed for learners who want to:
• Clearly understand how useRef works under the hood
• See multiple practical implementations in one place
• Build confidence in using React hooks efficiently