//create user reducer function
export const authReducer = (
  state = { name: "chamira", role: "SE" },
  action
) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
