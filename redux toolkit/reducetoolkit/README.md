🧮 Redux Counter App

A simple React + Redux Toolkit counter application that demonstrates the basics of state management, reducers, actions, and payloads.

🚀 Features

🟢 Increment and decrement the counter
🟢 Reset the counter to zero
🟢 Increment by a custom user-entered amount
🟢 Built using React, Redux Toolkit, and React-Redux
🟢 Clean and responsive user interface

🛠️ Tech Stack

🟢 React (Functional Components + Hooks)
🟢 Redux Toolkit (for simplified state management)
🟢 React-Redux (for connecting React with Redux)
🟢 Vite or Create React App (for project setup)

📦 Installation

Clone the repository

git clone https://github.com/<your-username>/<your-repo-name>.git


Navigate to the project folder

cd <your-repo-name>


Install dependencies -> npm install


Install Redux Toolkit and React Redux

npm install @reduxjs/toolkit react-redux


Start the app-> npm run dev


(If using Create React App)

npm start


Open your browser and visit:

• Vite → http://localhost:5173

• CRA → http://localhost:3000

📁 Project Structure
src/
  redux/
    store.js
  features/
    counter/
      counterSlice.js
  App.jsx
  App.css
  main.jsx

🧠 How It Works

🟢 The counterSlice.js file defines reducers for increment, decrement, reset, and incrementByAmount.
🟢 Each reducer updates the state based on the action payload.
🟢 The App.jsx component uses useSelector to read state and useDispatch to trigger actions.



💬 Redux Toolkit ( Explanation)

Redux Toolkit ek modern aur easy version hai Redux ka.
Pehle Redux setup karna thoda complicated hota tha —
bohot saare files (actions, reducers, constants) manually likhne padte the.

Redux Toolkit ne sab kuch simplify kar diya hai.
Ab sirf ek createSlice() likhne se hi ye sab automatically handle ho jaata hai 👇

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 },
  },
})


🟢 createSlice() ek hi jagah par:

•Reducer functions banata hai

•Action creators generate karta hai

•Automatically Redux store ke sath kaam karta hai

To basically —

Redux Toolkit = “Redux ka easy version” 😄
Less boilerplate + Cleaner code + Faster development

💡 Example
dispatch(incrementByAmount(5))


🟢 Here, 5 is the payload, which gets added to the counter’s value.