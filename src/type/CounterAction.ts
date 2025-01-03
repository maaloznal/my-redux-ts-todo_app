export type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "DECREMENT_BY_AMOUNT"; payload: number }
  | { type: "INCREMENT_BY_AMOUNT"; payload: number };
