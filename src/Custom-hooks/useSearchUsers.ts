import { useContext } from "react";

import { IUserContext, UsersContext } from "../App";
import IUser from "../Interfaces/IUser";

const useSearchUsers = () => {
  const UsersCtx = useContext<IUserContext | null>(UsersContext);
  const searchKey = UsersCtx?.searchKey || "";
  if (searchKey.length === 0) {
    return UsersCtx?.users;
  }
  return UsersCtx?.users.filter((user: IUser) => user.name.toLowerCase().indexOf(searchKey) >= 0 || user.email.toLowerCase().indexOf(searchKey) >= 0);
};

export default useSearchUsers;
