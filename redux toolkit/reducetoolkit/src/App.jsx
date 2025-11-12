import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { decrement, increment, reset, incrementByAmount } from "./features/counter/counterSlice"; 
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0); // ✅ fixed naming
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handlerIncrementClick() {
    dispatch(increment());
  }

  function handlerDecrementClick() {
    dispatch(decrement());
  }

  function handlerResetClick() {
    dispatch(reset());
  }

  function handlerIncAmountClick() {
    dispatch(incrementByAmount(Number(amount))); // ✅ dispatch with payload
  }

  return (
    <div>
      <button onClick={handlerIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handlerDecrementClick}>-</button>
      <button onClick={handlerResetClick}>Reset</button>
      <div>
        <input
          type="number"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)} // ✅ fixed typo
        />
        <button onClick={handlerIncAmountClick}>Inc By Amount</button>
      </div>
    </div>
  );
}

export default App;
