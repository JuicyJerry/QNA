import {
  CREATE,
  UPDATE,
  DELETE,
  LOGIN,
  AUTH,
  REGISTER,
} from "../_actions/index";

export default function reducer(state, action) {
  console.log("[reducer] state ===> ", state);
  console.log("[reducer] action ===> ", action);

  switch (action.type) {
    case CREATE:
      // return {
      //   ...state
      //   userData: action.data,
      // };
      // return [...state.questions, action.data];
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            id: action.data.id,
            content: action.data.content,
            isDone: action.data.isDone,
          },
        ],
      };
    case UPDATE:
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case DELETE:
      return state.filter((item) => item.id !== action.targetId);
    case LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case REGISTER:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case AUTH:
      return {
        ...state,
        isLogin: action.isLogin,
        isAuth: action.isAuth,
        userData: action.data,
      };
    default:
      return state;
  }
}
