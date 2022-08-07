import { createContext, useReducer, Dispatch, FC, ReactNode } from "react";

type ContextProviderProps = {
  children?: ReactNode;
};

type Article = {
  title: string;
  body: string;
  date: string;
  datetime: string;
};

type ArticleState = {
  articles: Article[];
};

type Action = { type: "ADD_ARTICLE"; payload: Article };

const initialState: ArticleState = {
  articles: [
    {
      title: "Title 1",
      body: "Body 1",
      datetime: "2020-01-29",
      date: "Jan 29, 2020",
    },
    {
      title: "Title 2",
      body: "Body 2",
      datetime: "2020-01-29",
      date: "Jan 29, 2020",
    },
  ],
};

export const ArticlesContext = createContext<{
  state: ArticleState;
  dispatch: Dispatch<Action>;
}>(null);

const reducer = (state: ArticleState, action: Action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return { articles: [action.payload, ...state.articles] };
    default:
      throw new Error();
  }
};

export const ArticlesContextProvider: FC<ContextProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ArticlesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ArticlesContext.Provider>
  );
};
