export const createDate = useCallback((content) => {
  console.log("[App/createDate] content ===> ", content);

  dispatch({
    type: "CREATE",
    data: {
      id: `q-${idRef.current++}`,
      content: content,
      isDone: true,
    },
  });

  // setData((prev) => [...prev, content]);
}, []);

export const updateData = useCallback((targetId) => {
  dispatch({
    type: "UPDATE",
    targetId: targetId,
  });
}, []);

export const deleteData = useCallback((targetId) => {
  dispatch({
    type: "DELETE",
    targetId: targetId,
  });
}, []);

export const loginUser = useCallback((userInfo) => {
  dispatch({
    type: "LOGIN",
    isLogin: userInfo.isLogin,
  });
}, []);

export const registerUser = useCallback((userInfo) => {
  dispatch({
    type: "REGISTER",
    isLogin: userInfo.isLogin,
  });
}, []);

export const authUser = useCallback((userInfo) => {
  console.log("[authUser] userInfo ===> ", userInfo);
  dispatch({
    type: "AUTH",
    isAuth: userInfo.isAuth,
    isLogin: userInfo.isLogin,
  });
}, []);
