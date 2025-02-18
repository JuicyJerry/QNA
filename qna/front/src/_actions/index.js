export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const AUTH = "AUTH";

export const createDate = (content, idRef) => ({
  type: CREATE,
  data: {
    id: `q-${idRef.current++}`,
    content: content,
    isDone: true,
  },
});

export const updateData = (targetId) => ({
  type: UPDATE,
  targetId: targetId,
});

export const deleteData = (targetId) => ({
  type: DELETE,
  targetId: targetId,
});

export const loginUser = (userInfo) => ({
  type: LOGIN,
  isLogin: userInfo.isLogin,
});

export const registerUser = (userInfo) => ({
  type: REGISTER,
  isLogin: userInfo.isLogin,
});

export const authUser = (userInfo) => ({
  type: AUTH,
  isAuth: userInfo.isAuth,
  isLogin: userInfo.isLogin,
});
