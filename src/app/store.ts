import { combineReducers, createStore, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { CounterAction } from "../type/CounterAction";
import { CounterState } from "../type/CounterState";



const initialState: CounterState = {
  count: 0,
};
function counterReducer(
  state = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_BY_AMOUNT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT_BY_AMOUNT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type AppDispatch = Dispatch<CounterAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer);
export default store;
