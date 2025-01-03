import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Счетчик:{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button
        onClick={() => dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 5 })}
      >
        +5
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT_BY_AMOUNT", payload: 5 })}
      >
        -5
      </button>
    </div>
  );
}
