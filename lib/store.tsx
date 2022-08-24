import { createContext, useReducer, Dispatch, FC, ReactNode } from "react";

type ContextProviderProps = {
  children?: ReactNode;
};

export type TerminalHistoryItem = {
  id?: string;
  command: string;
  response?: ReactNode | string;
};
export type TerminalHistory = TerminalHistoryItem[];

type TerminalState = {
  history: TerminalHistory;
};

type Action =
  | { type: "ADD_HISTORY_ITEM"; payload: TerminalHistoryItem }
  | { type: "RESET_HISTORY" };

const initialState: TerminalState = {
  history: [],
};

export const TerminalContext = createContext<{
  state: TerminalState;
  dispatch: Dispatch<Action>;
}>(null);

const reducer = (state: TerminalState, action: Action) => {
  switch (action.type) {
    case "ADD_HISTORY_ITEM":
      const item = action.payload;

      // add random number so that we can add for the initial history multiple items at once
      const timestamp = new Date().toISOString();
      item.id = `${Math.floor(Math.random() * 1000)}-${timestamp}`;

      return { history: [...state.history, item] };
    case "RESET_HISTORY":
      return { history: [] };
    default:
      throw new Error();
  }
};

export const TerminalContextProvider: FC<ContextProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TerminalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TerminalContext.Provider>
  );
};
