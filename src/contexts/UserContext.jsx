import { createContext, useContext, useReducer } from "react";
import { users } from "../data/users";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const userDataReducer = (state, action) => {
  switch (action.type) {
    case "logUser": {
      const updatedUserArray = state.map((user) => {
        return user.id === action.id
          ? { ...user, loggedIn: !user.loggedIn }
          : user;
      });
      return updatedUserArray;
    }
    case "registerUser":
      return [...state, action.payload];
    case "updateUser": {
      const updatedUserArray = state.map((user) => {
        return user.id === action.id
          ? { ...user, [action.changedKey]: action.changedValue }
          : user;
      });
      return updatedUserArray;
    }
    default:
      return state;
  }
};

export default function UserContextProvider({ children }) {
  const [userData, dispatch] = useReducer(userDataReducer, users);

  return (
    <UserContext.Provider value={{ userData, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
